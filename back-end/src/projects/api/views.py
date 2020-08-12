from rest_framework.generics import ListAPIView, RetrieveAPIView

from projects.models import Project
from .serializers import ProjectSerializer

class ProjectListView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetailView(RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer