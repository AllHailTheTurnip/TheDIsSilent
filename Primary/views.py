

from django.shortcuts import render, redirect
from django.http import HttpResponse
import psycopg2
from Primary.models import HeaderContent


def index(request):
    conn = psycopg2.connect("dbname=postgres user=myuser password=password")
    cur = conn.cursor()
    cur.execute("SELECT content FROM public.headerContent;")
    context = {"radio": cur.fetchone(), "bunny": cur.fetchone(), "shield": cur.fetchone()}
    return render(request, "index.html", context)


def contact(request):
    if request.method == 'POST':
        conn = psycopg2.connect("dbname=postgres user=myuser password=password")
        cur = conn.cursor()
        firstname = request.POST['firstName']
        lastName = request.POST['lastName']
        title = request.POST['title']
        email = request.POST['email']
        message = request.POST['message']
        cur.execute("""INSERT INTO public.messages( "firstName", "lastName",title, email,message) 
        values (%s, %s, %s, %s, %s);""", (firstname, lastName, title, email, message))
        conn.commit()
        cur.close()
    return render(request, "contact.html")
