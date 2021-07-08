from django.urls import path,include
from .views import StudentView
from rest_framework import routers


router = routers.DefaultRouter()
router.register('api/student',StudentView)


urlpatterns = [
    path('', include(router.urls) ,name='studentview'),
    path('api/', include('rest_framework.urls', namespace='rest_framework'))
]
