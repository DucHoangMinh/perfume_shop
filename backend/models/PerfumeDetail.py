from models.Base import BaseModel
from peewee import CharField, TextField, ForeignKeyField, IntegerField
from playhouse.postgres_ext import JSONField
from models.PerfumeFragnant import PerfumeFragnant


class PerfumeDetail(BaseModel):
    name = CharField(null=False, unique=True, max_length=30)
    branch = CharField(null=False, max_length=30)
    fragnent = ForeignKeyField(PerfumeFragnant, backref='id')
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
