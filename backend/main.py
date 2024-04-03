from flask import Flask, request, abort
from core.api import api
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from models.User import User
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager()
login_manager.init_app(app)
app.app_context().push()
app.register_blueprint(api)
app.config['SECRET_KEY'] = '0805DB9201224F33D1959086D1D4A1E9'


@login_manager.user_loader
def load_user(user_id):
    return User.get_by_id(user_id)


if (__name__ == "__main__"):
    app.run(debug=True)
