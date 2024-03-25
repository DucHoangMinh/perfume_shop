from flask import Blueprint
from core.endpoints.test import test_router
api = Blueprint('api', __name__, url_prefix='/')

api.register_blueprint(test_router)