from django.urls import path,include
from .views import StudentView

urlpatterns = [
    path('myadmin/', StudentView ,name='studentview'),
]
