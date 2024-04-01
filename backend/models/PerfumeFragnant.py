from models.Base import BaseModel
from peewee import TextField


class PerfumeFragnant(BaseModel):
    name_en = TextField(null=False, unique=True)
    name_vn = TextField(null=False, unique=True)

    class Meta:
        db_table = 'perfume_fragnant'
