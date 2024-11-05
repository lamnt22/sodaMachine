package com.example.sodaMachine.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.sodaMachine.modal.Product;
import com.example.sodaMachine.service.ProductService;

@RestController
@RequestMapping("/api/product")
@CrossOrigin("http://localhost:3000")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@GetMapping("")
	public ResponseEntity<List<Product>> getAllProduct(){
		return new ResponseEntity<List<Product>>(productService.findAll(), HttpStatus.OK);
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getProductById(@PathVariable("id") final Integer id){
		
		if(id != null) {
			return new ResponseEntity<Product>(productService.findById(id).get(), HttpStatus.OK);
		}else {
			return new ResponseEntity<Product>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addProduct(@RequestBody final Product product){
		
		try {
			Product pro = productService.save(product);
			return new ResponseEntity<Product>(pro, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateProduct(@PathVariable("id") final Integer id, @RequestBody final Product product){
		
		try {
			if(id != null) {
				Product pro = productService.update(id, product);
				return new ResponseEntity<Product>(pro, HttpStatus.OK);
			}else {
				return new ResponseEntity<>("Id is undefined", HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable("id") final Integer id){
		
		if(id != null) {
			productService.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			return new ResponseEntity<>("Id is undefined", HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/search")
	public ResponseEntity<List<Product>> searchProduct(@RequestParam("keyword") final String keyword){
		
		return new ResponseEntity<List<Product>>(productService.findByName(keyword), HttpStatus.OK);
	}
}
