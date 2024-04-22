from models.Base import BaseModel
from peewee import TextField, DateTimeField, CharField, DateField, IntegerField, TimestampField, Check
from playhouse.postgres_ext import JSONField
from datetime import datetime
from models.PerfumeDetail import PerfumeDetail


class Coupon(BaseModel):
    period_from = DateTimeField()
    period_to = DateTimeField()
    code = TextField(null=False, default='')
    percentage = IntegerField(constraints=[Check('percentage < 100')])
    name = TextField()
    list_product_id = JSONField()

    class Meta:
        db_table = 'coupon'

    @classmethod
    def create_coupon(cls, coupon_create):
        required_properties = ["period_from", "period_to", "code", "percentage", "name", "list_product_id"]
        for prop in required_properties:
            if prop not in coupon_create or coupon_create[prop] is None:
                return f"Thuộc tính '{prop}' là bắt buộc và không được để trống", 400
        check_coupon_by_code = cls.get_by_property("code", coupon_create["code"])
        check_coupon_by_name = cls.get_by_property("name", coupon_create["name"])
        if check_coupon_by_code or check_coupon_by_name:
            return f"Mã giảm giá này đã tồn tại", 400
        new_coupon = cls(
            period_from=coupon_create["period_from"],
            period_to=coupon_create["period_to"],
            code=coupon_create["code"],
            percentage=coupon_create["percentage"],
            name=coupon_create["name"],
            list_product_id=coupon_create["list_product_id"]
        )
        new_coupon.save()
        return "Thêm thông tin coupon mới thành công", 200

    @classmethod
    def assign_perfume_details(cls, coupon_id, perfume_detail_ids):
        coupon = cls.get_by_id(coupon_id)
        if coupon is None:
            return "Coupon không tồn tại!", 404
        else:
            coupon.list_product_id = perfume_detail_ids
            coupon.save()
        return "Gán danh sách sản phẩm với coupon thành công", 200

    @classmethod
    def check_start_all_coupons(cls):
        all_coupons = cls.get_all()
        for coupon in all_coupons:
            if coupon['is_active'] == True and coupon['period_from'] <= datetime.now() <= coupon['period_to']:
                for pd_id in coupon['list_product_id']:
                    perfume_detail = PerfumeDetail.get_by_id(pd_id)
                    if perfume_detail is None:
                        print(f"Can not find perfume with id {pd_id}")
                        return f"Nước hoa với id {pd_id} không tồn tại", 400
                    else:
                        perfume_detail.current_sale_price = perfume_detail.price * ((100 - coupon['percentage']) / 100)
                        perfume_detail.save()

    @classmethod
    def check_stop_all_coupons(cls):
        all_coupons = cls.get_all_with_all_active()
        for coupon in all_coupons:
            if coupon['period_from'] > datetime.now() or coupon['period_to'] < datetime.now():
                coupon_model = cls.get_by_id(coupon['id'])
                coupon_model.is_active = False
                coupon_model.save()
                for pd_id in coupon['list_product_id']:
                    print(pd_id)
                    perfume_detail = PerfumeDetail.get_by_id(pd_id)
                    if perfume_detail is None:
                        print(f"Can not find perfume with id {pd_id}")
                        return f"Nước hoa với id {pd_id} không tồn tại", 400
                    else:
                        perfume_detail.current_sale_price = None
                        perfume_detail.save()