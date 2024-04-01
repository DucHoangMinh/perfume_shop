"""create table user

Revision ID: a6e00f4a0267
Revises: 
Create Date: 2024-03-25 11:03:13.485181

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'a6e00f4a0267'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    return '''
        CREATE TABLE "user" (
        id  bigserial NOT NULL,
        username VARCHAR not null unique,
        fullname VARCHAR not null ,
        password_hash TEXT not null ,
        email TEXT not null,
        gender BOOLEAN not null,
        role VARCHAR not null ,
        address TEXT not null ,
        phone BIGINT not null,
        is_active BOOLEAN not null default TRUE
    );
    '''
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    return '''
        DROP TABLE "user";
    '''
    # ### end Alembic commands ###
