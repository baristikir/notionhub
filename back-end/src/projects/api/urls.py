from django.urls import path

from .views import (
    ProjectListView,
    ProjectDetailView,
    ProjectCreateView,
    ProjectUpdateView,
    ProjectDeleteView
)
urlpatterns = [
    path('', ProjectListView.as_view()),
    path('create/', ProjectCreateView.as_view()),
    path('<pk>', ProjectDetailView.as_view()),
    path('<pk>/update', ProjectUpdateView.as_view()),
    path('<pk>/delete', ProjectDeleteView.as_view()),
]
