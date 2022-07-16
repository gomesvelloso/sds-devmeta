package br.com.dhweb.dsmedia.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.dhweb.dsmedia.entities.Sale;
import br.com.dhweb.dsmedia.services.SaleService;

@RestController
@RequestMapping(value="/sales")
public class SaleController {
	
	@Autowired //Injetar automaticamente a instância do sale service
	private SaleService service;
	
	@GetMapping //Confirgura o metodo para responder via web usando http
	public Page<Sale> findSales(
			@RequestParam(value="minDate", defaultValue = "") String minDate, 
			@RequestParam(value="maxDate", defaultValue = "") String maxDate,
			Pageable pageable) {
		return service.findSales(minDate,maxDate,pageable);
	}
	
	

}
