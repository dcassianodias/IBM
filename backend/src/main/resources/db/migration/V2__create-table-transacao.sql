CREATE TABLE transacao (

    id BIGSERIAL PRIMARY KEY,
    tipo VARCHAR(10) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    cliente_id BIGINT NOT NULL,
    Constraint fk_cliente
        FOREIGN KEY(cliente_id)
        REFERENCES cliente(id)
)