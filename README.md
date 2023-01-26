# RSS Feed App  
Apkmirror web adresinden RSS ile XML formatında API çekerek REST API işlemleri yapabiliyoruz  
  
## Backendde Yardımcı Uygulamalar
### Docker, Redis, MongoDB Compass, Postman, NodeJS 
  

## Projenin Görüntüleri

https://www.loom.com/share/a51178d059a845fc96d3c16cd9583b7e
  
  
## Backendde kullanılan kütüphaneler
    "@chakra-ui/react": "^2.4.9",
    "accesscontrol": "^2.2.1",
    "axios": "^1.2.4",
    "boom": "^7.3.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-rate-limit": "^5.2.6",
    "express-redis-cache": "^1.1.3",
    "express-xml-bodyparser": "^0.3.0",
    "ioredis": "^4.26.0",
    "mongoose": "^6.8.4",
    "nodemon": "^2.0.20",
    "rate-limit-redis": "^2.1.0",
    "react-query": "^3.39.2",
    "react-router-dom": "^6.7.0",
    "rss-parser": "^3.12.0",
    "sucrase": "^3.18.1",
    "xml": "^1.0.1"

## Frontendde kullanılan kütüphaneler ve hooks.
    "@chakra-ui/react": "^2.4.9",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "antd": "^5.1.6",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-query": "^3.39.2",
    "react-router-dom": "^6.7.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"


## Backend Ayağa Kaldırma  
- Docker uygulamasını indirin  
- Mongodb ve Redis'i yükleyebilmek için backend içerisindeki *docker-compose.yml* dosyası çalıştırılmalıdır.( Bilgisayarınızda docker ve  compose yüklü olmalıdır. [Docker indirmek ve bilgi almak için tıklayın](https://docs.docker.com/get-docker/ "Docker Web Site"))  
- Bunun için backend dizinine gidilerek docker-compose up komutu çalıştırılır.  
- `docker-compose up -d`  
  
- backend dizininde `yarn dev` & `npm run dev`  komutu çalıştırarak backend ayağa kaldırılır.  
  
- http://localhost:4000/ adresinde istek atarak backend'in ayakta olduğunu doğrulayabilirsiniz.  
  
  
## Frontend Ayağa Kaldırma  
- client dizinine giderek  `npm install` ile *node_modules* indirilir.  
- Daha sonra `yarn start` veya `npm start` komutu ile react projesi ayağa kaldırılır.  
  
  

