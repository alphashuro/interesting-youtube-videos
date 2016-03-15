FROM python:2.7
MAINTAINER alphashuro
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get install nodejs netcat nginx -y
RUN rm /etc/nginx/sites-enabled/default
RUN mkdir /code
WORKDIR /code
COPY mysite_nginx.conf /code/
RUN ln -s /code/mysite_nginx.conf /etc/nginx/sites-enabled/
RUN /etc/init.d/nginx start
ENV PYTHONUNBUFFERED 1
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY package.json /code/
COPY README.md /code/
RUN npm install
COPY start-docker.sh /code/
RUN chmod +x start-docker.sh
EXPOSE 80
COPY . /code/
CMD bash start-docker.sh
