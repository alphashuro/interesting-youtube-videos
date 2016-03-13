#!/usr/bin/env bash
/etc/init.d/nginx start
# Wait for the db service to be ready before continuing
echo "waiting for db..."
while ! nc -w 1 -z $DB_HOST $DB_PORT 2>/dev/null;
do
  echo -n .
  sleep 1
done

echo "db ready"

npm run build:prod
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic -v0 --noinput
uwsgi --ini uwsgi.ini
