from flask import Blueprint, request
from playhouse.shortcuts import model_to_dict
from models.PerfumeBranch import PerfumeBranch

perfume_branch_router = Blueprint('perfume_branch_router', __name__, url_prefix="/perfume_branch")
from . import token_required


@perfume_branch_router.get("/")
@token_required
def get_all_perfume_branches():
    return PerfumeBranch.get_all()


@perfume_branch_router.get("/<id>")
@token_required
def get_perfume_branch(id: int):
    print(id)
    perfume_branch = PerfumeBranch.get_by_id(id)
    print(perfume_branch)
    print(type(perfume_branch))
    return "nam"
