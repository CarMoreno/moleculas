from django.core.paginator import Paginator, EmptyPage
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_404_NOT_FOUND, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT
from rest_framework.views import APIView
from .models import Molecule, Activity
from .serializers import MoleculeSerializer, ActivitySerializer


class MoleculeDetail(APIView):
    def get(self, request, pk):
        try:
            molecule = Molecule.objects.get(pk=pk)
            molecule_serializer = MoleculeSerializer(molecule)
            return Response(data=molecule_serializer.data, status=HTTP_200_OK)
        except Molecule.DoesNotExist:
            return Response(data={'message': 'Molecule does not exist'}, status=HTTP_404_NOT_FOUND)


class MoleculeList(APIView):
    def get(self, request):
        try:
            molecules = Molecule.objects.all().order_by('id')
            page_number = request.query_params.get('page_number', 1)
            page_size = request.query_params.get('page_size', 10)
            paginator = Paginator(molecules, page_size)
            molecule_serializer = MoleculeSerializer(paginator.page(page_number), many=True)
            return Response(molecule_serializer.data, status=HTTP_200_OK)
        except EmptyPage:
            return Response({'message': 'Current page does not have data'}, status=HTTP_204_NO_CONTENT)


class ActivityList(APIView):
    def get(self, request, pk):
        try:
            molecule = Molecule.objects.get(pk=pk)
            activities = Activity.objects.filter(molecule=molecule).order_by('id')
            page_number = request.query_params.get('page_number', 1)
            page_size = request.query_params.get('page_size', 10)
            paginator = Paginator(activities, page_size)
            activity_serializer = ActivitySerializer(paginator.page(page_number), many=True)
            return Response(activity_serializer.data, status=HTTP_200_OK)
        except EmptyPage:
            return Response({'message': 'Current page does not have data'}, status=HTTP_204_NO_CONTENT)
        except Molecule.DoesNotExist:
            return Response({'message': 'Molecuel does not exist'}, status=HTTP_404_NOT_FOUND)

