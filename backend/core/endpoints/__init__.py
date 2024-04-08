from functools import wraps

import jwt
from flask import request

SECRET_KEY = '0805DB9201224F33D1959086D1D4A1E9'


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('token')
        print(token)
        if not token:
            return 'Token is missing', 403
        try:
            data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        except:
            return 'Token is invalid', 403
        return f(*args, **kwargs)

    return decorated
