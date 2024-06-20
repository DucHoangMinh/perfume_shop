from flask import Blueprint
from core.endpoints.test import test_router
from core.endpoints.User import user_router
from core.endpoints.PerfumeDetail import perfume_detail_router
from core.endpoints.PerfumeBranch import perfume_branch_router
from core.endpoints.PerfumeFragnant import perfume_fragnant_router
from core.endpoints.Coupon import coupon_router
from core.endpoints.Cart import cart_router
api = Blueprint('api', __name__, url_prefix='/')

api.register_blueprint(test_router)
api.register_blueprint(user_router)
api.register_blueprint(perfume_detail_router)
api.register_blueprint(perfume_branch_router)
api.register_blueprint(perfume_fragnant_router)
api.register_blueprint(coupon_router)
api.register_blueprint(cart_router)