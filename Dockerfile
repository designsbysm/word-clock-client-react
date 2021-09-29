FROM node:14.17.6-alpine

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app
COPY . ./

RUN npm install -g npm
RUN npm install --silent
RUN npm run build

CMD ["npm", "run", "serve"]