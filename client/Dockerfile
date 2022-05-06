FROM node
WORKDIR /app
COPY . .
RUN chown -R node:node /app/node_modules
CMD ["npm", "start"]