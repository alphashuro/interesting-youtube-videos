FROM python:2.7
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get install nodejs netcat -y
RUN mkdir /code
WORKDIR /code
ENV PYTHONUNBUFFERED 1
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD package.json /code/
RUN npm install
ADD . /code/
EXPOSE 80
CMD ./start-docker.sh
