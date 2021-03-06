"""add seeking inputs to venues

Revision ID: 34a95c92df0d
Revises: 109619bb0f22
Create Date: 2020-08-12 22:53:44.139779

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '34a95c92df0d'
down_revision = '109619bb0f22'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('venues', sa.Column('seeking_description', sa.String(length=500), nullable=True))
    op.add_column('venues', sa.Column('seeking_talent', sa.Boolean()))

    op.execute('UPDATE venues SET seeking_talent = False WHERE seeking_talent IS NULL;')

    op.alter_column('venues', sa.Column('seeking_talent', nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('venues', 'seeking_talent')
    op.drop_column('venues', 'seeking_description')
    # ### end Alembic commands ###
