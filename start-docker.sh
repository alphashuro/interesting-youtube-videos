#!/usr/bin/env bash

# Wait for the db service to be ready before continuing
echo "waiting for db..."
while ! nc -w 1 -z $DB_HOST $DB_PORT 2>/dev/null;
do
  echo -n .
  sleep 5
done

echo "db ready"

python manage.py migrate
python manage.py runserver 0.0.0.0:8000
