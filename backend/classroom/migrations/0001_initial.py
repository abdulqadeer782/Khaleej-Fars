# Generated by Django 3.2.4 on 2021-07-05 12:51

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Classroom',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('grade', models.CharField(max_length=100)),
                ('created_at', models.TimeField(auto_now_add=django.utils.timezone.now)),
                ('updated_at', models.TimeField(auto_now_add=django.utils.timezone.now)),
            ],
            options={
                'db_table': 'classes',
            },
        ),
        migrations.CreateModel(
            name='ClassSchedule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('class_timing', models.DateTimeField(verbose_name=django.utils.timezone.now)),
                ('class_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='classroom.classroom')),
            ],
            options={
                'db_table': 'classes_schedule',
            },
        ),
    ]
