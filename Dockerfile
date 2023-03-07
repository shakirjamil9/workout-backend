FROM node:16-alpine

RUN npm install -g nodemon

WORKDIR /backend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

# Run after the instance of image is running (Container)
CMD ["npm", "run", "dev"]