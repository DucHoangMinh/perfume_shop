from flask import Blueprint, request
from playhouse.shortcuts import model_to_dict
from models.PerfumeDetail import PerfumeDetail
perfume_detail_router = Blueprint('perfume_detail_router', __name__, url_prefix='/perfume_detail')
from . import token_required

@perfume_detail_router.get("/<id>")
def get_perfume_detail(id: int):
    perfume_detail = PerfumeDetail.get_by_id(id)
    print(perfume_detail.branch)
    return model_to_dict(perfume_detail)


@perfume_detail_router.post("/")
@token_required
def create_perfume_detail():
    perfume_detail_create = request.json
    return PerfumeDetail.create_perfume_detail(perfume_detail_create=perfume_detail_create)
