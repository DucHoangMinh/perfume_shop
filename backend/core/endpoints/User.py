import json
from pprint import pprint

from pydantic import parse

from flask import Blueprint, request
from models.User import User
from schemas.User import SaveUser as SaveUserSchema

user_router = Blueprint('user_router', __name__, url_prefix="/user")

@user_router.get("/<id>")
def get_user_by_id(id: int):
    try:
        return User.get_by_id(id, fields=[User.id,User.username, User.fullname,
                                      User.role, User.phone, User.address])
    except User.DoesNotExist:
        return {'message': 'User does not exist'}, 404

@user_router.post("/")
def create_user():
    user = User(data=request.json)
    user.save()
    return 'Testing'
