# from rest_framework.generics import (
#     ListAPIView,
#     RetrieveAPIView,
#     CreateAPIView,
#     UpdateAPIView,
#     DestroyAPIView
# )

from projects.models import Project
from .serializers import ProjectSerializer

from rest_framework import viewsets


class ProjectViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()


# class ProjectListView(ListAPIView):
#     queryset = Project.objects.all()
#     serializer_class = ProjectSerializer


# class ProjectDetailView(RetrieveAPIView):
#     queryset = Project.objects.all()
#     serializer_class = ProjectSerializer


# class ProjectCreateView(CreateAPIView):
#     queryset = Project.objects.all()
#     serializer_class = ProjectSerializer


# class ProjectUpdateView(UpdateAPIView):
#     queryset = Project.objects.all()
#     serializer_class = ProjectSerializer


# class ProjectDeleteView(DestroyAPIView):
#     queryset = Project.objects.all()
#     serializer_class = ProjectSerializer
