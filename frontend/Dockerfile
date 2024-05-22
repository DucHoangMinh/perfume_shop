FROM node:20.13-slim
WORKDIR /app/frontend
COPY . .
RUN npm install
RUN chown -R 1000:1000 /app/frontend
