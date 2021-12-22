FROM node:16.13.1-alpine

ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app

COPY ./package.json package.json
RUN npm install --silent
RUN npm install serve --silent

COPY . .
RUN npm run build

CMD ["serve", "-s", "build"]