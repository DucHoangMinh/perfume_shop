from peewee import Model, DateTimeField, BigIntegerField, BooleanField
from config.database import db

class BaseModel(Model):
    created_at = DateTimeField(),
    created_by = BigIntegerField(),
    modified_at = DateTimeField(),
    modified_by = BigIntegerField(),
    deleted_at = DateTimeField(),
    deleted_by = BigIntegerField(),
    active = BooleanField(default=True)

    class Meta:
        database = db
