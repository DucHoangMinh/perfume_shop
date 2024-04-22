"""create table perfume detail

Revision ID: 1985165f799d
Revises: 72db3ab7c9ea
Create Date: 2024-04-01 14:53:29.278797

"""
from typing import Sequence, Union
from alembic import op

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '1985165f799d'
down_revision: Union[str, None] = '72db3ab7c9ea'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute('''
        CREATE TABLE perfume_detail(
            id BIGSERIAL PRIMARY KEY UNIQUE NOT NULL ,
            name VARCHAR(255) UNIQUE NOT NULL,
            branch_id BIGINT NOT NULL,
            fragnant_id BIGINT NOT NULL,
            volume INT NOT NULL,
            concentration INT NOT NULL,
            gender BOOLEAN NOT NULL,
            price BIGINT NOT NULL,
            description TEXT NOT NULL,
            images jsonb DEFAULT '[]',
            ingredients jsonb DEFAULT '[]',
            notes TEXT NOT NULL,
            is_active BOOLEAN NOT NULL
        );
        ALTER TABLE perfume_detail ADD CONSTRAINT pkey_branch FOREIGN KEY (branch_id) REFERENCES perfume_branch(id);
        ALTER TABLE perfume_detail ADD CONSTRAINT pkey_fragnant FOREIGN KEY (fragnant_id) REFERENCES perfume_fragnant(id);
        ALTER TABLE perfume_detail ADD COLUMN current_sale_price int default null;
    ''')


def downgrade() -> None:
    op.execute('''
        DROP TABLE perfume_detail;
    ''')
