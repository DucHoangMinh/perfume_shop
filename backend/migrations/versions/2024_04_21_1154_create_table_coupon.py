"""create table coupon

Revision ID: 86fc8a1219dc
Revises: 1985165f799d
Create Date: 2024-04-21 11:54:02.805145

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '86fc8a1219dc'
down_revision: Union[str, None] = '1985165f799d'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute('''
        CREATE TABLE coupon (
            id  bigserial NOT NULL PRIMARY KEY UNIQUE ,
            period_from timestamp NOT NULL ,
            period_to timestamp NOT NULL ,
            code varchar(255) NOT NULL UNIQUE ,
            percentage bigint CHECK ( percentage < 100 ),
            list_product_id jsonb NOT NULL
        );
    ''')


def downgrade() -> None:
    op.execute('''
        DROP TABLE coupon;
    ''')
