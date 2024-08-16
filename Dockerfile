FROM node
WORKDIR /app
COPY . /app
Run npm install
EXPOSE 3000
CMD ["npm" ,"start"]