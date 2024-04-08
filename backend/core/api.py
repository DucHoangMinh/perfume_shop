from flask import Blueprint
from core.endpoints.test import test_router
from core.endpoints.User import user_router
from core.endpoints.PerfumeDetail import perfume_detail_router
api = Blueprint('api', __name__, url_prefix='/')

api.register_blueprint(test_router)
api.register_blueprint(user_router)
api.register_blueprint(perfume_detail_router)