# Generated by Django 4.2.1 on 2023-06-26 06:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('concesionariaApp', '0005_companyposition'),
        ('users', '0004_staffmember_delete_officemanager'),
    ]

    operations = [
        migrations.AlterField(
            model_name='staffmember',
            name='company_position',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='concesionariaApp.companyposition'),
        ),
    ]