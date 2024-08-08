from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.SimpleRouter()
router.register(r'book', BooksApi)

urlpatterns = [
    path('', include(router.urls)),
]
