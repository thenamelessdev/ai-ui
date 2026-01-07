FROM node:20

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npx", "vite" ]