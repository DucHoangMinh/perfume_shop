import json
from pprint import pprint
from flask_login import logout_user, current_user, login_user, login_required

from pydantic import parse

from flask import Blueprint, request
from models.User import User
from schemas.User import SaveUser as SaveUserSchema

user_router = Blueprint('user_router', __name__, url_prefix="/user")


@user_router.get("/<id>")
def get_user_by_id(id: int):
    try:
        return User.get_by_id(id, fields=[User.id, User.username, User.fullname,
                                          User.role, User.phone, User.address])
    except User.DoesNotExist:
        return {'message': 'User does not exist'}, 404


@user_router.post("/")
def create_user():
    user_create = request.json
    return User.create_user(user_create=user_create)


@user_router.post("/login")
def handle_login():
    attempt_user = User.get_by_property('email', request.json['email'])
    if attempt_user:
        print('[Debug] User login exists!')
        try_password = attempt_user.checkPassword(request.json['password'], hash_password=attempt_user.password_hash)
        if (try_password):
            login_user(attempt_user)
            return "Đăng nhập thành công, bạn sẽ được chuyển hướng về trang chủ!", 200
        else:
            return 'Sai mật khẩu, vui lòng thử lại!', 400
    return 'Không tìm thấy tài khoản tương ứng với email!', 404

@user_router.post("/logout")
@login_required
def logout():
    logout_user()
    return "Đăng xuất thành công!", 200

@user_router.get("/test_login_required")
@login_required
def test_login_required():
    return 'Test login required'

