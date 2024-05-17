package Services;

import entities.Transacao;
import org.springframework.beans.factory.annotation.Autowired;
import repositories.TransacaoRepository;

import java.util.List;

public class TransacaoService {

    @Autowired
    private TransacaoRepository transacaoRepository;

    public Transacao saveTransacao(Transacao transacao) {
        return transacaoRepository.save(transacao);
    }

    public List<Transacao> getTransacoesByClienteId(Long clienteId) {
        return transacaoRepository.findByClienteId(clienteId);
    }

    public Double getSaldoTotal(Long clienteId) {
        List<Transacao> transacoes = transacaoRepository.findByClienteId(clienteId);
        return transacoes.stream()
                .mapToDouble(t -> "CREDITO".equals(t.getTipo()) ? t.getValor() : -t.getValor())
                .sum();
    }
}
