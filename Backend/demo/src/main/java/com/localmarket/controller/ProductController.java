package com.localmarket.controller;

import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RestController;

import com.localmarket.payloads.ProductDto;
import com.localmarket.service.ProductService;
@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductController {

	@Autowired
	private ProductService productService;

	// post - add new Product
	@PostMapping("/addproduct/{shopId}")
	public ResponseEntity<ProductDto> createProduct(@RequestBody ProductDto productDto,@PathVariable Integer shopId){

		ProductDto createProductDto = productService.addNewProduct(productDto,shopId);
		return new ResponseEntity<> (createProductDto,HttpStatus.CREATED);
	}

	// PUT - update product
	@PutMapping("/update/{pId}")
	public ResponseEntity<ProductDto> updateProduct(@RequestBody ProductDto productDto,@PathVariable Integer pId) {

		ProductDto updatedProduct = productService.updateProductById(productDto, pId);
		return ResponseEntity.ok(updatedProduct);
	}
	
//	@PutMapping("/update/{productName}")
//	public ResponseEntity <ProductDto> updateProduct(@RequestBody ProductDto productDto,@PathVariable String productName) {
//		
//		ProductDto updateProduct = productService.updateProductByName(productDto, productName);
//		return ResponseEntity.ok(updateProduct);
//	}
	
	@GetMapping("/getAllProd/{shopId}")
	public ResponseEntity <List<ProductDto>> getAllProducts(@PathVariable Integer shopId) {
		
		return ResponseEntity.ok(productService.getAllProducts(shopId));
	}
	
//	@GetMapping("/{material}")
//	public ResponseEntity <List<ProductDto>> getAllProductsByMaterial(@PathVariable String material) {
//		
//		return ResponseEntity.ok(productService.getAllProductsByMaterial(material));
//	}
	
	
//	@GetMapping("/{categeory}")
//	public ResponseEntity <List<ProductDto>> getAllProductsByCategeory(@PathVariable String categeory) {
//		
//		return ResponseEntity.ok(productService.getAllProductsByCategeory(categeory));
//	}

	@GetMapping("/{pId}")
	public ResponseEntity <ProductDto> getSingleProduct(@PathVariable Integer pId){
		return ResponseEntity.ok(productService.getProductById(pId));
	}
	
	@GetMapping("/{productName}")
	public ResponseEntity<List<ProductDto>> getAllProductsByName(@PathVariable String productName) {
		
		return ResponseEntity.ok(productService.getAllProductsByName(productName));
	}

	//DELETE - delete product
	@DeleteMapping("/delete/{pId}")
	public ResponseEntity<?> deleteProduct(@PathVariable Integer pId) {
		productService.deleteProductById(pId);
		
		return new ResponseEntity(Map.of("message","Product deleted successfully"),HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{productName}")
	public ResponseEntity<?>deleteProductByName(@PathVariable String productName) {
		
		productService.deleteProductByName(productName);
		
		return new ResponseEntity(Map.of("message","Product deleted successfully"),HttpStatus.OK);
	}

}
