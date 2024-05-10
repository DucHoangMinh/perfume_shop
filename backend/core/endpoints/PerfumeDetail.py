from flask import Blueprint, request, jsonify
from playhouse.shortcuts import model_to_dict
from models.PerfumeDetail import PerfumeDetail

perfume_detail_router = Blueprint('perfume_detail_router', __name__, url_prefix='/perfume_detail')
from . import token_required


@perfume_detail_router.get("/<id>")
@token_required
def get_perfume_detail(id: int):
    perfume_detail = PerfumeDetail.get_by_id(id)
    return model_to_dict(perfume_detail)


@perfume_detail_router.post("/")
@token_required
def create_perfume_detail():
    perfume_detail_create = request.json
    return PerfumeDetail.create_perfume_detail(perfume_detail_create=perfume_detail_create)


@perfume_detail_router.patch("/<id>")
@token_required
def patch_perfume_detail(id: int):
    try:
        return PerfumeDetail.update_one(id, request.json)
    except Exception as e:
        return {'message': str(e)}, 400


@perfume_detail_router.delete("/<id>")
@token_required
def soft_delete_perfume_detail(id: int):
    try:
        return PerfumeDetail.soft_delete(id)
    except Exception as e:
        return {'message': str(e)}, 400


@perfume_detail_router.get("/all")
@token_required
def get_all_perfume_details():
    return PerfumeDetail.get_all()


@perfume_detail_router.get("/having_sale")
@token_required
def get_all_perfume_details_having_sale():
    params = request.json or None
    return PerfumeDetail.get_all_perfume_details_having_sale(percentage=params.get("percentage"))
