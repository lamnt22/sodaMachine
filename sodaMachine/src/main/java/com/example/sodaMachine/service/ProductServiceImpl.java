package com.example.sodaMachine.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sodaMachine.modal.Product;
import com.example.sodaMachine.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepository productRepository;

	@Override
	public Product save(Product entity) {
		return productRepository.save(entity);
	}

	@Override
	public List<Product> findAll() {
		return productRepository.findAll();
	}

	@Override
	public Optional<Product> findById(Integer id) {
		return productRepository.findById(id);
	}

	@Override
	public void deleteById(Integer id) {
		productRepository.deleteById(id);
	}
	
	@Override
	public Product update(Integer id, Product pro) {
		
		Product productById = productRepository.findById(id).get();
		pro.setName(productById.getName());
		pro.setPrice(productById.getPrice());
		pro.setImage(productById.getImage());
		pro.setQuantity(productById.getQuantity());
		
		return productRepository.save(pro);
	}
}
