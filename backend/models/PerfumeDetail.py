from models.Base import BaseModel
from peewee import CharField, TextField, ForeignKeyField, IntegerField, BooleanField, JOIN
from playhouse.postgres_ext import JSONField
from models.PerfumeFragnant import PerfumeFragnant
from models.PerfumeBranch import PerfumeBranch
from models.Coupon import Coupon
from playhouse.shortcuts import model_to_dict
from datetime import datetime

class PerfumeDetail(BaseModel):
    name = CharField(null=False, unique=True, max_length=30)
    branch = ForeignKeyField(PerfumeBranch, backref='perfumedetails', column_name="branch_id")
    fragnant = ForeignKeyField(PerfumeFragnant, backref='perfumedetails', column_name="fragnant_id")
    volume = IntegerField(null=False)
    concentration = IntegerField(null=False)
    gender = BooleanField(null=False)
    price = IntegerField(null=False)
    description = TextField(null=False)
    images = JSONField(null=False)
    ingredients = JSONField(null=True)
    notes = TextField(null=False)
    current_sale_price = IntegerField(default=None)
    current_coupon_id = ForeignKeyField(Coupon,  backref='perfumedetailscoupon', column_name="current_coupon_id")

    class Meta:
        db_table = 'perfume_detail'

    @classmethod
    def create_perfume_detail(cls, perfume_detail_create):
        required_properties = ["name", "branch", "fragnant", "volume", "concentration", "gender", "price",
                               "description", "images", "notes"]
        for prop in required_properties:
            if prop not in perfume_detail_create or perfume_detail_create[prop] is None:
                return f"Thuộc tính '{prop}' là bắt buộc và không được để trống", 400

        check_perfume_by_name = cls.get_by_property("name", perfume_detail_create["name"])
        if check_perfume_by_name:
            return f"Loại nước hoa {perfume_detail_create['name']} đã tồn tại trong hệ thống!", 400

        branch_name_selected = (PerfumeBranch.get_by_id(perfume_detail_create["branch"])).name
        fragnant_name_selected = (PerfumeFragnant.get_by_id(perfume_detail_create["fragnant"])).name_vn
        perfume_detail = cls(
            name=perfume_detail_create["name"],
            branch=perfume_detail_create["branch"],
            fragnant=perfume_detail_create["fragnant"],
            volume=perfume_detail_create["volume"],
            concentration=perfume_detail_create["concentration"],
            gender=perfume_detail_create["gender"],
            price=perfume_detail_create["price"],
            description=perfume_detail_create["description"],
            images=perfume_detail_create["images"],
            ingredients=perfume_detail_create["ingredients"],
            notes=perfume_detail_create["notes"],
            search_str=f"{perfume_detail_create["name"]} | {branch_name_selected} | {fragnant_name_selected}"
        )
        perfume_detail.save()
        return "Thêm thông tin nước hoa mới thành công!", 200

    @classmethod
    def check_start_all_coupons(cls):
        all_coupons = Coupon.get_all()
        for coupon in all_coupons:
            if coupon['is_active'] == True and coupon['period_from'] <= datetime.now() <= coupon['period_to']:
                for pd_id in coupon['list_product_id']:
                    perfume_detail = cls.get_by_id(pd_id)
                    if perfume_detail is None:
                        print(f"Can not find perfume with id {pd_id}")
                        return f"Nước hoa với id {pd_id} không tồn tại", 400
                    else:
                        perfume_detail.current_sale_price = perfume_detail.price * ((100 - coupon['percentage']) / 100)
                        perfume_detail.current_coupon_id = coupon['id']
                        perfume_detail.save()

    @classmethod
    def check_stop_all_coupons(cls):
        all_coupons = Coupon.get_all_with_all_active()
        for coupon in all_coupons:
            if coupon['period_from'] > datetime.now() or coupon['period_to'] < datetime.now():
                coupon_model = Coupon.get_by_id(coupon['id'])
                coupon_model.is_active = False
                coupon_model.save()
                for pd_id in coupon['list_product_id']:
                    perfume_detail = cls.get_by_id(pd_id)
                    if perfume_detail is None:
                        print(f"Can not find perfume with id {pd_id}")
                        return f"Nước hoa với id {pd_id} không tồn tại", 400
                    else:
                        perfume_detail.current_sale_price = None
                        perfume_detail.current_coupon_id = None
                        perfume_detail.save()
    @classmethod
    def get_all_perfume_details_having_sale(cls, percentage=None):
        pd = cls.alias("pd")
        cp = Coupon.alias("cp")
        perfumes_hv_s = pd.select(pd, cp.percentage.alias("sale_percentage")).where(pd.current_sale_price.is_null(False)).join(cp, JOIN.LEFT_OUTER, on=(cp.id == pd.current_coupon_id)).dicts()
        print(percentage)
        if percentage is not None:
            perfumes_hv_s = [item for item in perfumes_hv_s if item['sale_percentage'] == percentage]
        return list(perfumes_hv_s)
