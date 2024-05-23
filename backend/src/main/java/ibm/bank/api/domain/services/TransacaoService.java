package ibm.bank.api.domain.Services;

import ibm.bank.api.domain.repositories.TransacaoRepository;
import ibm.bank.api.domain.entities.Transacao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class TransacaoService {

    @Autowired
    private TransacaoRepository transacaoRepository;

    public Transacao saveTransacao(Transacao transacao) {
        return transacaoRepository.save(transacao);
    }

    public List<Transacao> getTransacoesByCliente(Long clienteId) {
        return transacaoRepository.findByClienteId(clienteId);
    }

    public BigDecimal getSaldoTotal(Long clienteId) {
        List<Transacao> transacoes = getTransacoesByCliente(clienteId);
        AtomicReference<BigDecimal> saldo = new AtomicReference<>(BigDecimal.ZERO);

        transacoes.forEach(t -> {
            if ("CREDITO".equals(t.getTipo())) {
                saldo.updateAndGet(v -> v.add(t.getValor()));
            } else if ("DEBITO".equals(t.getTipo())) {
                saldo.updateAndGet(v -> v.subtract(t.getValor()));
            }
        });

        return saldo.get();
    }
}
