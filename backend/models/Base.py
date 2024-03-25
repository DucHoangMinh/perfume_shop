from peewee import Model, DateTimeField, BigIntegerField, BooleanField
from config.database import db

class BaseModel(Model):
    id = BigIntegerField(primary_key=True, unique=True, null=False),
    created_at = DateTimeField(),
    created_by = BigIntegerField(),
    modified_at = DateTimeField(),
    modified_by = BigIntegerField(),
    deleted_at = DateTimeField(),
    deleted_by = BigIntegerField(),
    active = BooleanField(default=True)

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
            return list(query.dicts())[0]  # Trả về dict chứa các trường được truy xuất
        except cls.DoesNotExist:
            return None
