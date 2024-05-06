from models.Base import BaseModel
from peewee import CharField, TextField, ForeignKeyField, IntegerField, BooleanField
from playhouse.postgres_ext import JSONField
from models.PerfumeFragnant import PerfumeFragnant
from models.PerfumeBranch import PerfumeBranch
from models.Coupon import Coupon
from playhouse.shortcuts import model_to_dict

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
            notes=perfume_detail_create["notes"]
        )
        perfume_detail.save()
        return "Thêm thông tin nước hoa mới thành công!", 200

    @classmethod
    def get_all_perfume_details_having_sale(cls, percentage=None):
        perfumes_hv_s = cls.select().where(cls.current_sale_price.is_null(False))
        response = []
        for perfume in perfumes_hv_s:
            if percentage is not None:
                print(perfume)
        return perfumes_hv_s
