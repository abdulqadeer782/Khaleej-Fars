# Generated by Django 3.2.4 on 2021-07-07 13:49

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0003_alter_student_created_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='admission_date',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
