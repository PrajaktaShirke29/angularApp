# base image
FROM node:8

# set working directory
RUN mkdir /usr/src/apps
WORKDIR /usr/src/apps

# add `/usr/src/app/node_module/.bin` to $PATH
ENV PATH /usr/src/apps/node_module/.bin:$PATH

#install and cache app dependenies
COPY package.json /usr/src/apps/package.json
RUN npm install
#RUN npm install -g webpack-dev-server
RUN npm install -g @angular/cli@1.7.1

#add app
COPY . /usr/src/apps

#start app
CMD webpack-dev-server --host 0.0.0.0 --port 3030

