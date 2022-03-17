from rest_framework import serializers
from .models import Molecule, Activity

class MoleculeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Molecule
        fields = '__all__'


class ActivitySerializer(serializers.ModelSerializer):
    target_name = serializers.ReadOnlyField(source='target.name')
    organism = serializers.ReadOnlyField(source='target.organism')

    class Meta:
        model = Activity
        fields = ['id', 'type', 'units', 'value', 'relation', 'target_name', 'organism']