package com.localmarket.service;

import java.util.List;

import com.localmarket.payloads.ProductDto;

public interface ProductService {
	
	
	ProductDto addNewProduct(ProductDto product, Integer shopId);
	
	ProductDto updateProductById(ProductDto product,Integer productId);
	
//	ProductDto updateProductByName(ProductDto product,String pname);
	
	List<ProductDto> getAllProducts(Integer shopId);

	ProductDto getProductById(Integer productId);
	
//	List<ProductDto> getAllProductsByCategeory(String categeory);
	
	List<ProductDto> getAllProductsByName(String productName);
	
//	List<ProductDto> getAllProductsByMaterial(String material);
	
	void deleteProductById(Integer productId);
	
	void deleteProductByName(String productName);

}
