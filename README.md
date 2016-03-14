# Interesting Youtube Videos

This is a simple app that displays a list of interesting youtube videos.

## Languages
______
* [Python](https://www.python.org/)
* [Javascript](https://www.javascript.com/)

## Technologies used
______
### Backend
* [Django](https://www.djangoproject.com)
* [Django-Tastypie](https://django-tastypie.readthedocs.org/)
* [Postgres](http://www.postgresql.org/) (+ [psycopg2](http://initd.org/psycopg/))
* [Django-webpack-loader](https://github.com/owais/django-webpack-loader)
* [Graphql](http://facebook.github.io/graphql/)
### Frontend
* [Webpack](https://webpack.github.io/) ([babel](https://babeljs.io/))
* [React](https://facebook.github.io/react/) + [Redux](https://github.com/reactjs/redux)
* [mocha](https://mochajs.org/) + [wallaby](http://wallabyjs.com/)
	* [chai](http://chaijs.com/)
	* [enzme](https://github.com/airbnb/enzyme/)
	* [sinon](http://sinonjs.org/)
	* [jsdom](https://github.com/tmpvar/jsdom)
* [xo](https://github.com/sindresorhus/xo)
### Deployment
* [nginx](https://www.nginx.com/)
* [uwsgi](https://uwsgi-docs.readthedocs.org/)
* [Docker](https://www.docker.com/)

## Run locally
______

> note: _do run `$ npm install` and `pip install -r requirements.txt` before executing all of the following commands_

### Development server
```
$ npm run start:dev
```
### Simulated production server
```
$ npm start
```
### Docker container
```
$ docker-compose build
$ docker-compose up
```
> the server will be exposed on localhost port 80, pointing to port 80 on the container, change in config file if port 80 is bound on your machine


## Run tests
______
```
$ npm run test
```

## Run remotely
______
###Prerequisites
	* virtualBox
	* docker
	* docker-machine
	* docker-compose

_To run in a VirtualBox machine_
```
$ docker-machine create --driver virtualbox default # default can be any name you want
$ eval $(docker-machine env default)
$ docker-compose build
$ docker-compose up
> this will set up the virtual box or remote machine with the app, listening on port 80
