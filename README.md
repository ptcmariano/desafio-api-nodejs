# desafio-api-nodejs

repo api nodejs

## autor

Paulo Tiago Castanho Mariano <paulotiagocm@hotmail.com>

## para executar
- requisitos para rodar local
- deve ter mongodb instalado
- deve definir em /etc/hosts mongodb para localhost
- ou mudar na model a string de conexao

  npm i #instala dependencias

  npm start

#### ou com docker-compose

  docker run --rm -it -v $(pwd):/home/node -w /home/node node:9.11.2-alpine npm i

  docker-compose up

## rotas implementadas:

#### People
- GET http://localhost:3000/api/v1/people
- POST http://localhost:3000/api/v1/people com header "Content-Type":"application/x-www-form-urlencoded" e body com {
    name: String,
    email: String,
    password: String,
    cpf: String,
    phone: String,
    address: String
}
- DELETE http://localhost:3000/api/v1/people com header "Content-Type":"application/x-www-form-urlencoded" e body {"_id":"id a ser apagado"}
