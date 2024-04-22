from models.Base import BaseModel
from peewee import TextField, CharField, DateField, IntegerField, TimestampField, Check
from playhouse.postgres_ext import JSONField


class Coupon(BaseModel):
    period_from = TimestampField()
    period_to = TimestampField()
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