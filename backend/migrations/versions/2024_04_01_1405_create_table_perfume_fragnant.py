"""create table perfume fragnant

Revision ID: 5e1be5acb798
Revises: a6e00f4a0267
Create Date: 2024-04-01 14:05:28.082820

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '5e1be5acb798'
down_revision: Union[str, None] = 'a6e00f4a0267'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute('''
        CREATE TABLE perfume_fragnant(
            id BIGSERIAL PRIMARY KEY NOT NULL UNIQUE ,
            name_en VARCHAR(255) UNIQUE NOT NULL,
            name_vn VARCHAR(255) UNIQUE NOT NULL,
            is_active BOOLEAN NOT NULL DEFAULT TRUE
        )
    ''')


def downgrade() -> None:
    op.execute('''
        DROP TABLE perfume_fragnant;
    ''')
