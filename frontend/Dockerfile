FROM node:20.13-slim
WORKDIR /app/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN chown -R 1000:1000 /app/frontend
RUN npm run build