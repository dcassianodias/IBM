CREATE TABLE cliente (

    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    numero_conta VARCHAR(20) NOT NULL
);