# Generated by Django 4.2.1 on 2023-06-26 06:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_alter_staffmember_company_position'),
    ]

    operations = [
        migrations.RenameField(
            model_name='staffmember',
            old_name='company_position',
            new_name='company_position_id',
        ),
    ]