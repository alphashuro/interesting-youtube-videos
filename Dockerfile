FROM python:2.7
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get install nodejs netcat nginx -y
RUN rm /etc/nginx/sites-enabled/default
RUN mkdir /code
WORKDIR /code
COPY mysite_nginx.conf /code/
RUN ln -s /code/mysite_nginx.conf /etc/nginx/sites-enabled/
RUN /etc/init.d/nginx start
ENV PYTHONUNBUFFERED 1
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD package.json /code/
RUN npm install
ADD . /code/
EXPOSE 80
CMD ./start-docker.sh
