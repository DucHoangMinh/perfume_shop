"""create table perfume branch

Revision ID: 72db3ab7c9ea
Revises: 5e1be5acb798
Create Date: 2024-04-01 14:52:46.056745

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '72db3ab7c9ea'
down_revision: Union[str, None] = '5e1be5acb798'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    return '''
        CREATE TABLE perfume_branch(
            id BIGSERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            founded_year DATE NOT NULL,
            country_of_origin VARCHAR(255) NOT NULL,
            website VARCHAR(255) NOT NULL UNIQUE,
            email VARCHAR(255) NOT NULL UNIQUE,
            is_action BOOLEAN NOT NULL DEFAULT TRUE
        );
    '''


def downgrade() -> None:
    return '''
        DROP TABLE perfume_branch;
    '''
