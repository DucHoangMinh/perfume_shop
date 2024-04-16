from models.Base import BaseModel
from peewee import CharField, TextField, ForeignKeyField, IntegerField
from playhouse.postgres_ext import JSONField
from models.PerfumeFragnant import PerfumeFragnant
from models.PerfumeBranch import PerfumeBranch


class PerfumeDetail(BaseModel):
    name = CharField(null=False, unique=True, max_length=30)
    branch = ForeignKeyField(PerfumeBranch, backref='perfumedetails', column_name="branch_id")
    fragnant = ForeignKeyField(PerfumeFragnant, backref='perfumedetails', column_name="fragnant_id")
    volume = IntegerField(null=False)
    concentration = IntegerField(null=False)
    gender = CharField(null=False, max_length=10)
    price = IntegerField(null=False)
    description = TextField(null=False)
    images = JSONField(null=False)
    ingredients = JSONField(null=False)
    notes = TextField(null=False)

    class Meta:
        db_table = 'perfume_detail'

    @classmethod
    def create_perfume_detail(cls, perfume_detail_create):
        required_properties = ["name", "branch", "fragnant", "volume", "concentration", "gender", "price",
                               "description", "images", "ingredients", "notes"]
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
