from models.Base import BaseModel
from peewee import TextField


class PerfumeFragnant(BaseModel):
    name_en = TextField(null=False, unique=True)
    name_vn = TextField(null=False, unique=True)

    class Meta:
        db_table = 'perfume_fragnant'

    @classmethod
    def create_perfume_fragnant(cls, perfume_fragnant_create):
        required_properties = ["name_en", "name_vn"]
        for prop in required_properties:
            if prop not in perfume_fragnant_create or perfume_fragnant_create[prop] is None:
                return f"Thuộc tính '{prop}' là bắt buộc và không được để trống", 400
        check_perfume_by_name_en = cls.get_by_property("name_en", perfume_fragnant_create["name_en"])
        check_perfume_by_name_vn = cls.get_by_property("name_vn", perfume_fragnant_create["name_vn"])
        if check_perfume_by_name_en or check_perfume_by_name_vn:
            return f"Mùi hương {perfume_fragnant_create['name_en']} đã tồn tại trong hệ thống!", 400
        new_perfume_fragrant = cls(
            name_en=perfume_fragnant_create["name_en"],
            name_vn=perfume_fragnant_create["name_vn"],
            search_str=f"{perfume_fragnant_create["name_en"]} | {perfume_fragnant_create["name_vn"]}"
        )
        new_perfume_fragrant.save()
        return "Thêm thông tin mùi hương mới thành công", 200