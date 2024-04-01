from models.Base import BaseModel
from peewee import TextField, CharField, DateField

class PerfumeBranch(BaseModel):
    name = CharField(unique=True, null=False,max_length=30)
    founded_year = DateField(null=False)
    country_of_origin = CharField(null=False)
    website = TextField(null=False, unique=True)
    email = TextField(null=False, unique=True)

    class Meta:
        db_table = 'perfume_branch'