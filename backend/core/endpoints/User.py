from flask_login import logout_user, current_user, login_user, login_required
from playhouse.shortcuts import model_to_dict

from flask import Blueprint, request, jsonify
from models.User import User
from pprint import pprint
from functools import wraps
import jwt
import datetime

user_router = Blueprint('user_router', __name__, url_prefix="/user")
SECRET_KEY = '0805DB9201224F33D1959086D1D4A1E9'


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('token')
        print(token)
        if not token:
            return 'Token is missing', 403
        try:
            data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        except:
            return 'Token is invalid', 403
        return f(*args, **kwargs)

    return decorated


@user_router.get("/<id>")
def get_user_by_id(id: int):
    try:
        return model_to_dict(User._get_by_id(id, fields=[User.id, User.username, User.fullname,
                                                         User.role, User.phone, User.address]))
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
            token = jwt.encode(
                {'user': attempt_dmuser.username, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=300000)},
                SECRET_KEY)
            return {'user': model_to_dict(User._get_by_id(attempt_user.id,
                                                         fields=[User.id, User.username, User.fullname, User.email,
                                                                 User.gender,
                                                                 User.address, User.phone])), 'token': token}, 200
        else:
            return 'Sai mật khẩu, vui lòng thử lại!', 400
    return 'Không tìm thấy tài khoản tương ứng với email!', 404


@user_router.post("/logout")
@login_required
def logout():
    logout_user()
    return "Đăng xuất thành công!", 200


@user_router.get("/check_authenticated")
@token_required
def test_login_required():
    return 'You are now login!', 200
