package controllers;

import Services.TransacaoService;
import entities.Transacao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transacoes")
public class TransacaoController {

    @Autowired
    private TransacaoService transacaoService;

    @PostMapping
    public Transacao createTransacao(@RequestBody Transacao transacao) {
        return transacaoService.saveTransacao(transacao);
    }

    @GetMapping("/cliente/{clienteId}")
    public List<Transacao> getTransacoesByClienteId(@PathVariable Long clienteId) {
        return transacaoService.getTransacoesByClienteId(clienteId);
    }

    @GetMapping("/saldo/{clienteId}")
    public Double getSaldoTotal(@PathVariable Long clienteId) {
        return transacaoService.getSaldoTotal(clienteId);
    }
}
