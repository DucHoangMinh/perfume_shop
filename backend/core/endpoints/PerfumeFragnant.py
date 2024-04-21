from flask import Blueprint, request
from playhouse.shortcuts import model_to_dict
from models.PerfumeFragnant import PerfumeFragnant

perfume_fragnant_router = Blueprint('perfume_fragnant_router', __name__, url_prefix="/perfume_fragnant")
from . import token_required


@perfume_fragnant_router.get("/")
@token_required
def get_all_perfume_fragnants():
    return PerfumeFragnant.get_all()

@perfume_fragnant_router.get("/<id>")
def get_perfume_fragnants_by_id(id:int):
    return model_to_dict(PerfumeFragnant.get_by_id(id))

@perfume_fragnant_router.post("/")
@token_required
def create_perfume_fragnant():
    perfume_fragnant_create = request.json
    return PerfumeFragnant.create_perfume_fragnant(perfume_fragnant_create=perfume_fragnant_create)
