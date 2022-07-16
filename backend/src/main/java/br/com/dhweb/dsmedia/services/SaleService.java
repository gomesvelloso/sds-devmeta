package br.com.dhweb.dsmedia.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.dhweb.dsmedia.entities.Sale;
import br.com.dhweb.dsmedia.repositories.SaleRepository;

@Service //Regitrando o SaleService como um componente
public class SaleService {
	
	@Autowired // Essa anonotation faz a importação automática
	private SaleRepository repository;
	public List<Sale> findSales() {
		
		return repository.findAll(); 
	}

}
