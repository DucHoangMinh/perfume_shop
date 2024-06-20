from models.Base import BaseModel
from peewee import IntegerField
from playhouse.postgres_ext import JSONField
from playhouse.shortcuts import model_to_dict

class Cart(BaseModel):
    user_id = IntegerField(null=False)
    product_list = JSONField(null=False)

    class Meta:
        db_table = 'cart'

    @classmethod
    def insert_cart(cls, user_id=int, product_list=list):
        current_cart = cls.select().where(cls.user_id == user_id)
        if current_cart:
            current_cart = current_cart[0]
            current_cart.product_list = product_list
            current_cart.save()
            return model_to_dict(current_cart)
        else:
            new_cart = cls(user_id=user_id, product_list=product_list)
            new_cart.save()
            return model_to_dict(new_cart)