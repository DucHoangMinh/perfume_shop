from flask import Blueprint, request
from playhouse.shortcuts import model_to_dict
from models.Coupon import Coupon

coupon_router = Blueprint('coupon_router', __name__, url_prefix="/coupon")
from . import token_required


@coupon_router.get("/")
@token_required
def get_all_coupons():
    return Coupon.get_all()


@coupon_router.post("/")
@token_required
def create_coupon():
    coupon_create = request.json
    return Coupon.create_coupon(coupon_create=coupon_create)


@coupon_router.post("/assign_perfume_details")
@token_required
def assign_perfume_details():
    data = request.json
    coupon_id = data['coupon_id']
    perfume_detail_ids = data['perfume_detail_ids']
    return Coupon.assign_perfume_details(coupon_id=coupon_id, perfume_detail_ids=perfume_detail_ids)
