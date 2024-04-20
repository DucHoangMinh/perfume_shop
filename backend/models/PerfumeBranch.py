from models.Base import BaseModel
from peewee import TextField, CharField, DateField, IntegerField


class PerfumeBranch(BaseModel):
    name = CharField(unique=True, null=False, max_length=30)
    founded_year = IntegerField(null=False)
    country_of_origin = CharField(null=False)
    website = TextField(null=False, unique=True)
    email = TextField(null=False, unique=True)

    class Meta:
        db_table = 'perfume_branch'

    @classmethod
    def create_perfume_branch(cls, perfume_branch_create):
        required_props = ["name", "founded_year","country_of_origin",
                          "website", "email"]
        for prop in required_props:
            if prop not in perfume_branch_create or perfume_branch_create[prop] is None:
                return f"Thuộc tính '{prop}' là bắt buộc và không được để trống", 400
        check_perfume_by_name = cls.get_by_property("name", perfume_branch_create["name"])
        check_perfume_by_email = cls.get_by_property("email", perfume_branch_create["email"])
        check_perfume_by_website = cls.get_by_property("website", perfume_branch_create["website"])
        if check_perfume_by_name or check_perfume_by_email or check_perfume_by_website:
            return f"Branch nước hoa {perfume_branch_create['name']} đã tồn tại trong hệ thống!", 400
        # try:
        new_perfume_branch = cls(
            name=perfume_branch_create["name"],
            founded_year=perfume_branch_create["founded_year"],
            country_of_origin=perfume_branch_create["country_of_origin"],
            website=perfume_branch_create["website"],
            email=perfume_branch_create["email"]
        )
        new_perfume_branch.save()
        return "Thêm thông tin hãng nước hoa mới thành công", 200
        # except Exception as e:
        #     return {'message': str(e)}, 400