FROM node as installer
WORKDIR /app
COPY package.json ./
RUN npm run install

FROM node as tester
ENV DATABASE_URL="postgres://postgres:postgrespw@host.docker.internal:5432/test"
WORKDIR /app
COPY --from=installer /app/node_modules ./node_modules
COPY . .
RUN npm run test

FROM node as executer
ENV DATABASE_URL="postgres://postgres:postgrespw@host.docker.internal:5432/test"
WORKDIR /app
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]
