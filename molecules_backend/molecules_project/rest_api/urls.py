from django.urls import path
from .views import MoleculeDetail, MoleculeList, ActivityList
urlpatterns = [
    path('', MoleculeList.as_view(),  name='molecule_list'),
    path('<int:pk>', MoleculeDetail.as_view(),  name='molecule_detail'),
    path('<int:pk>/activity', ActivityList.as_view(), name='activity_list_by_molecule')
]