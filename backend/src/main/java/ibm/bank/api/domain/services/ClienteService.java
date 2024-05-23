package ibm.bank.api.domain.Services;

import ibm.bank.api.domain.repositories.ClienteRepository;
import ibm.bank.api.domain.entities.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente saveCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente getClienteById(Long id) {
        return clienteRepository.findById(id).orElse(null);
    }

    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }
}
