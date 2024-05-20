package ibm.bank.api.domain.repositories;

import ibm.bank.api.domain.entities.Transacao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransacaoRepository extends JpaRepository<Transacao, Long> {

    List<Transacao> findByClienteId(Long clienteId);
}
