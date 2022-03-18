from django.db import models


class Activity(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.CharField(blank=True, null=True, max_length=250)
    units = models.CharField(blank=True, null=True, max_length=100)
    value = models.FloatField(blank=True, null=True)
    relation = models.CharField(blank=True, null=True, max_length=2)
    target = models.ForeignKey('Target', models.DO_NOTHING, blank=True, null=True)
    molecule = models.ForeignKey('Molecule', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'activity'


class Target(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(blank=True, null=True, max_length=255)
    organism = models.CharField(blank=True, null=True, max_length=255)

    class Meta:
        managed = False
        db_table = 'target'


class Molecule(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(blank=True, null=True, max_length=255)
    max_phase = models.IntegerField(blank=True, null=True)
    structure = models.TextField(blank=True, null=True, max_length=4000)
    inchi_key = models.CharField(blank=True, null=True, max_length=27)

    class Meta:
        managed = False
        db_table = 'molecule'
