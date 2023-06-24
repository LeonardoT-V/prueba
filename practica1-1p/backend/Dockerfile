FROM node

WORKDIR /server
COPY package.json ./


RUN npm install

COPY . .
ENV DATABASE_URL="postgres://postgres:postgrespw@host.docker.internal:5432/test"
# ENV DATABASE_URL="postgres://postgres:postgrespw@localhost:5432/test"

EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]
