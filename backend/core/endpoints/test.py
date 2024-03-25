from flask import Blueprint
test_router = Blueprint('test_router', __name__, url_prefix='/test')

@test_router.route('/', methods=['GET'])
def test_route():
    return 'API run successfully!'
