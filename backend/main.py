from flask import Flask, request, abort
from core.api import api

app = Flask(__name__)
app.app_context().push()
app.register_blueprint(api)

if(__name__ == "__main__"):
    app.run(debug=True)