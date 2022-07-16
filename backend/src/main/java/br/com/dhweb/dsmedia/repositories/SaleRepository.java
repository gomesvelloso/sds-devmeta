package br.com.dhweb.dsmedia.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.dhweb.dsmedia.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
	

}
