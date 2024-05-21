# Banco Simulado - Aplicação Web

Esta é uma aplicação web que simula transações financeiras de um banco. A aplicação permite o cadastro de clientes, registro de débitos e créditos na conta do cliente, e a visualização do extrato da conta com o saldo total.

## Tecnologias Utilizadas

- **Frontend:** Angular
- **Backend:** Java (Spring Boot)
- **Banco de Dados:** PostgreSQL

## Pré-requisitos

Antes de começar, certifique-se de ter instalado as seguintes ferramentas:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Maven](https://maven.apache.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Configuração do Backend

1. Clone o repositório:

   ```bash
   git clone git@github.com:dcassianodias/IBM.git

2. Configure o banco de dados PostgreSQL e atualize as configurações no arquivo application.yml:

   spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/seu_banco
    username: seu_usuario
    password: sua_senha
  jpa:
    hibernate:
      ddl-auto: update
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect


 ## Configuração do Frontend

1. Navegue até o diretório do frontend:

   cd ../frontend

2. Instale as dependências do Angular:

   npm install

3. Execute o frontend:

   npm start

4. Abra o navegador e acesse http://localhost:4200.

## Licença
Este projeto é licenciado sob os termos da MIT License.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto.

## Contato
Se você tiver alguma dúvida, entre em contato:

Email: dcassianodias@gmail.com
LinkedIn: https://www.linkedin.com/in/danilo-dias-063332199/

   

 
