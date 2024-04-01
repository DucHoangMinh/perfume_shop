import bcrypt
from models.Base import BaseModel
from config.database import db
from flask_login import UserMixin
from config.setting import roles
from peewee import BigIntegerField, CharField, TextField, BooleanField, BlobField

class User(BaseModel, UserMixin):
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

    @classmethod
    def set_hash_password(self, password):
        bytes = password.encode('utf-8')
        salt = bcrypt.gensalt()
        return bcrypt.hashpw(bytes, salt)

    @classmethod
    def checkPassword(self, input_pasword, hash_password):
        print('Check Password')
        inputPwBytes = input_pasword.encode('utf-8')
        return bcrypt.checkpw(inputPwBytes, hash_password.encode('utf-8'))

    @classmethod
    def create_user(cls, user_create):
        check_user_by_email = cls.get_by_property('email', user_create['email'])
        if check_user_by_email:
            return "Email đã được sử dụng, vui lòng thử lại!", 400
        check_user_by_username = cls.get_by_property('username', user_create['username'])
        if check_user_by_username:
            return "Username đã được sử dụng, vui lòng thử lại!", 400
        user = cls(
            username=user_create['username'],
            fullname=user_create['fullname'],
            password_hash=User.set_hash_password(user_create['password']),
            email=user_create['email'],
            gender=user_create['gender'],
            role=user_create['role'],
            address=user_create['address'],
            phone=user_create['phone']
        )
        user.save()
        return "Tạo tài khoản thành công! Vui lòng đăng nhập để bắt đầu sử dụng ứng dụng!"

    @classmethod
    def toString(cls):
        return " " + cls.username + " " + cls.fullname + " " + cls.address + " " + cls.email + " " + str(
            cls.gender) + " " + str(cls.phone) + " " + " " + str(cls.password_hash) + " " + str(cls.role)
