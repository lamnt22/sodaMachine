package com.example.sodaMachine.service;

import java.util.List;
import java.util.Optional;

import com.example.sodaMachine.modal.Product;

public interface ProductService {

	void deleteById(Integer id);

	Optional<Product> findById(Integer id);

	List<Product> findAll();

	Product save(Product entity);

	Product update(Integer id, Product pro);

	List<Product> findByName(String name);

}
