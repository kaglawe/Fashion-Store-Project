package com.localmarket.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.localmarket.beans.Product;
import com.localmarket.payloads.ProductDto;

public interface ProductDao extends JpaRepository<Product,Integer> {
	
//	public Product findByName(String productName);
//
//	public List<Product> findAllByCategeory(String categeory);
//
//	public List<Product> findAllByMaterial(String material);
//
//	public List<Product> findAllByName(String productName);
//	
	

}
