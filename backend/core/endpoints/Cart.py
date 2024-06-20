from flask import Blueprint, request
from models.Cart import Cart
from playhouse.shortcuts import model_to_dict

cart_router = Blueprint('cart_router', __name__, url_prefix="/cart")
from . import token_required


@cart_router.post("/")
@token_required
def insert_cart():
    user_id = request.json.get('user_id')
    product_list = request.json.get('product_list')
    return Cart.insert_cart(user_id=user_id, product_list=product_list)


@cart_router.get("/<id>")
@token_required
def get_cart(id: int):
    return model_to_dict(Cart.select().where(Cart.user_id == id)[0])
