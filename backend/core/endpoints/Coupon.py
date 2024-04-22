from flask import Blueprint, request
from playhouse.shortcuts import model_to_dict
from models.Coupon import Coupon

coupon_router = Blueprint('coupon_router', __name__, url_prefix="/coupon")
from . import token_required

@coupon_router.get("/")
@token_required
def get_all_coupons():
    return Coupon.get_all()