import bcrypt

from models.Base import BaseModel
from config.database import db
from config.setting import roles
from peewee import BigIntegerField, CharField, TextField, BooleanField


class User(BaseModel):
    username = CharField(null=False, unique=True)
    fullname = CharField(null=False, unique=True)
    password_hash = TextField(null=False)
    email = TextField(null=False)
    gender = BooleanField(null=False)
    role = TextField(null=False, default=roles['USER'])
    address = TextField(null=False)
    phone = BigIntegerField(null=False)

    class Meta:
        db_table = 'user'

    @property
    def password(self):
        return self.password

    @password.setter
    def set_hash_password(self, password):
        bytes = password.encode('utf-8')
        salt = bcrypt.gensalt()
        self.password_hash = bcrypt.hashpw(bytes, salt)

    def checkPassword(self, input_pasword):
        inputPwBytes = input_pasword.encode('utf-8')
        return bcrypt.checkpw(inputPwBytes, self.password_hash)

    @classmethod
    def __init__(self, data=None):
        self.username = data['username']
        self.fullname = data['fullname']
        self.address = data['address']
        self.email = data['email'] or None
        self.gender = data['gender'] or None
        self.phone = data['phone'] or None
        self.password.setter(data['password'])
