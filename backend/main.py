from flask import Flask, request, abort
from core.api import api
from flask_bcrypt import Bcrypt

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.app_context().push()
app.register_blueprint(api)

if(__name__ == "__main__"):
    app.run(debug=True)