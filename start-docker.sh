#!/usr/bin/env bash

# Wait for the db service to be ready before continuing
echo "waiting for db..."
while ! nc -w 1 -z $DB_HOST $DB_PORT 2>/dev/null;
do
  echo -n .
  sleep 1
done

echo "db ready"

npm run update_data
npm start
