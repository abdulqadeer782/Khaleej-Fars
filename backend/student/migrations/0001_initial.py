# Generated by Django 2.2.13 on 2021-06-23 16:48

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('parents', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fname', models.CharField(max_length=100)),
                ('lname', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=150)),
                ('dob', models.DateTimeField(default=datetime.datetime.now)),
                ('mobile', models.BigIntegerField()),
                ('created_at', models.DateTimeField(default=datetime.datetime.now)),
                ('updated_at', models.DateTimeField(default=datetime.datetime.now)),
                ('parent', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='parents.Parent')),
            ],
        ),
    ]