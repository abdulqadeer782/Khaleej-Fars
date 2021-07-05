from django.urls import path,include
from .views import TeacherView
from rest_framework import routers


router = routers.DefaultRouter()
router.register('teacher',TeacherView   )


urlpatterns = [
    path('', include(router.urls) ,name='studentview'),
]
