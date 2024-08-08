from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets, status
from .serializer import BookSerializer
from .models import Book

# Create your views here.
class BooksApi(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
