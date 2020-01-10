# Docker Setup

## 0. Environment File.

copy env.example to .env and update all the values as needed.  Please note that any values you set do not support spaces.

ie. line below is not valid

```sh
RABBITMQ_DEFAULT_USER = admin
```

while this line is valid

```sh
RABBITMQ_DEFAULT_USER=admin
```

Setup all the credentials according to your needs and start the services via:

```sh
docker-compose up -d 
```

## Build pipeline image
