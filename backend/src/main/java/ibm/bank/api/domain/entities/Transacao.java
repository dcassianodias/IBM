package ibm.bank.api.domain.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@Entity
public class Transacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tipo; // "DEBITO" ou "CREDITO"
    private BigDecimal valor;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;
}
