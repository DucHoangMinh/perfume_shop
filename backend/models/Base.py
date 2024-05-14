from http.client import HTTPException
from playhouse.shortcuts import model_to_dict, dict_to_model
from peewee import Model, PrimaryKeyField,DateTimeField, BigIntegerField, BooleanField, AutoField, DoesNotExist, BigAutoField
from config.database import db
import datetime


class BaseModel(Model):
    id = PrimaryKeyField(column_name="id", primary_key=True, unique=True, null=False),
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
    def get_all(cls):
        query = cls.select().where(cls.is_active == True)
        response = []
        for item in query:
            print(model_to_dict(item))
            response.append(model_to_dict(item))
        try:
            return response
        except Exception as e:
            return None

    @classmethod
    def get_all_with_all_active(cls):
        query = cls.select()
        response = []
        for item in query:
            print(model_to_dict(item))
            response.append(model_to_dict(item))
        try:
            return response
        except Exception as e:
            return None

    @classmethod
    def _get_by_id(cls, id:int, fields=None):
        query = cls.select()
        if fields:
            query = query.select(*fields)
        query = query.where(cls.id == id)
        try:
            return list(query)[0]  # Trả về dict chứa các trường được truy xuất
        except Exception as e:
            return None

    @classmethod
    def get_by_list_id(cls, ids: list[int], fields=None):
        query = cls.select()
        if fields:
            query = query.select(*fields)
        query = query.where(cls.id.in_(ids))  # Sử dụng phương thức in_() để kiểm tra cls.id nằm trong danh sách ids
        response = []
        for item in query:
            response.append(model_to_dict(item))
        try:
            return response  # Trả về dict chứa các trường được truy xuất
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

    @classmethod
    def soft_delete(cls, id:int):
        try:
            data_update = {
                'is_active': False
            }
            data = cls.update_one(id, data_update=data_update)
            return data
        except Exception as e:
            return {'message': str(e)}, 400

