"""create table perfume detail

Revision ID: 090a14169dba
Revises: 5e1be5acb798
Create Date: 2024-04-01 14:24:06.696263

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '090a14169dba'
down_revision: Union[str, None] = '5e1be5acb798'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
