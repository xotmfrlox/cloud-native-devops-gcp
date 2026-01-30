FROM node:20-alpine

WORKDIR /app

COPY app/package*.json ./
RUN npm install --only=production

COPY app/ .

ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.js"]
