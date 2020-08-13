from projects.api.views import ProjectViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ProjectViewSet, basename='projects')
urlpatterns = router.urls


# -- old -- #
# from django.urls import path
# from .views import (
#     ProjectListView,
#     ProjectDetailView,
#     ProjectCreateView,
#     ProjectUpdateView,
#     ProjectDeleteView
# )
# urlpatterns = [
#     path('', ProjectListView.as_view()),
#     path('create/', ProjectCreateView.as_view()),
#     path('<pk>', ProjectDetailView.as_view()),
#     path('<pk>/update', ProjectUpdateView.as_view()),
#     path('<pk>/delete', ProjectDeleteView.as_view()),
# ]
