from datetime import datetime
from pydantic import BaseModel


class SaveUser(BaseModel):
    id: int = None,
    address: str = None,
    email: str = None,
    phone: str = None,
    gender: str = None,
    username: str = None,
    fullname: str = None,
    password: str = None
    role: str = None,
    active: bool = None,
    created_at: datetime = None,
    created_by: int = None,
    modified_at: datetime = None,