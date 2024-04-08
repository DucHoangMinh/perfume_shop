from http.client import HTTPException
from playhouse.shortcuts import model_to_dict, dict_to_model
from peewee import Model, DateTimeField, BigIntegerField, BooleanField, AutoField, DoesNotExist
from config.database import db
import datetime


class BaseModel(Model):
    id = AutoField(),
    created_at = DateTimeField(default=datetime.datetime.now),
    created_by = BigIntegerField(),
    modified_at = DateTimeField(default=datetime.datetime.now()),
    modified_by = BigIntegerField(),
    deleted_at = DateTimeField(),
    deleted_by = BigIntegerField(),
    is_active = BooleanField(default=True)

    class Meta:
        database = db

    @classmethod
    def get_by_id(cls, id, fields=None):
        query = cls.select()
        # Nếu fields được cung cấp, chỉ chọn các trường cụ thể đó
        if fields:
            query = query.select(*fields)
        query = query.where(cls.id == id)
        try:
            return list(query)[0]  # Trả về dict chứa các trường được truy xuất
        except Exception as e:
            return None

    @classmethod
    def get_by_property(cls, prop, value):
        query = cls.select().where(getattr(cls, prop) == value)
        if len(list(query.dicts())) > 0:
            return list(query)[0]
        else:
            return None

    @classmethod
    def update_one(cls, id: int, data_update: dict, **kwargs):
        try:
            # data_update['modified_at'] = datetime.datetime.now()
            query = cls.update(**data_update).where(
                cls.id == id
            )
            query.execute()
            if 'no_return' in kwargs and kwargs['no_return']:
                return None
            data = cls.get_by_id(id)
            return model_to_dict(data)
        except DoesNotExist:
            return "Does not exist", 404

