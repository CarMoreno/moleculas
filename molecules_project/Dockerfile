FROM python:3
ENV PYTHONUNBUFFERED 1

WORKDIR /backend
COPY ./requirements.txt /backend/
RUN pip install -r requirements.txt
COPY . /backend/
RUN python manage.py makemigrations
RUN python manage.py migrate
EXPOSE 8000