from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=155)
    released_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title