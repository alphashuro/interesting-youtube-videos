FROM python:2.7
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
ADD package.json /code/
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get install nodejs netcat -y
RUN npm install
RUN pip install -r requirements.txt
ADD . /code/
