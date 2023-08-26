package com.localmarket.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.localmarket.beans.Product;
import com.localmarket.beans.ShopDetails;
import com.localmarket.beans.User;
import com.localmarket.dao.ProductDao;
import com.localmarket.dao.ShopDao;
import com.localmarket.exceptions.ResourceNotFoundException;
import com.localmarket.payloads.ProductDto;
import com.localmarket.payloads.ShopDetailsDto;
import com.localmarket.payloads.UserDto;


@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDao productDao;

	@Autowired 
	private ShopDao shopDao;

	// Method for add new Product
	@Override
	public ProductDto addNewProduct(ProductDto productDto,Integer shopId) {

		ShopDetails shopDetails=this.getValidShopDetails(shopId);
		Product product =this.productDtoToProduct(productDto);
		product.setShopDetails(shopDetails);
		Product newProduct=productDao.save(product);
		ProductDto newProductDto=this.productToProductDto(newProduct);
		newProductDto.setShopDetails(shopDetails);
		return newProductDto;
	}	

	//	// this method get all products list
	@Override
	public List<ProductDto> getAllProducts(Integer shopId) {

		List<Product> productl = productDao.findAll();
		List<Product> plist = new ArrayList();
		
		Iterator <Product> p = productl.iterator();
		while(p.hasNext()) {
			Product product = p.next();
			if(product.getShopDetails().getShopId()==shopId) {
				
				plist.add(product);
			}
		}
		List<ProductDto> productDto = plist.stream().map(product -> this.productToProductDto(product)).collect(Collectors.toList());
		
		return productDto;
	}


	// Method for Update product -> retrieve product by Id and update that product
	@Override
	public ProductDto updateProductById(ProductDto productDto, Integer pId) {

		Product product = productDao.findById(pId)
				.orElseThrow(()-> new ResourceNotFoundException("Product","pid",pId));

		product.setProductName(productDto.getProductName());
		product.setDescription(productDto.getDescription());
		product.setCategory(productDto.getCategory());
		product.setMaterial(productDto.getMaterial());
		product.setPrice(productDto.getPrice());
		product.setStock(productDto.getStock());
		

		Product updatedProduct = productDao.save(product);

		return this.productToProductDto(updatedProduct);

	}

	// Method for update product -> retrieve product by name and update that product

	//	@Override
	//	public ProductDto updateProductByName(ProductDto productDto, String productName) {
	//		
	//		Product product = productDao.findByName(productName);
	//		
	//		product.setProductName(productDto.getProductName());
	//		product.setDescription(productDto.getDescription());
	//		product.setCategeory(productDto.getCategeory());
	//		product.setPrice(productDto.getPrice());
	//		product.setStock(productDto.getStock());
	//		product.setImage(productDto.getImage());
	//		
	//		Product updatedProduct = productDao.save(product);
	//		
	//		return this.productToProductDto(updatedProduct);
	//		
	//	}



	//	@Override
	//	public List<ProductDto> getAllProductsByCategeory(String categeory) {
	//		
	//		List<Product> products = productDao.findAllByCategeory(categeory);
	//		List<ProductDto> productDto = products.stream().map(product -> this.productToProductDto(product)).collect(Collectors.toList());
	//		
	//		return productDto;
	//	}
	//	
	//	@Override
	//	public List<ProductDto> getAllProductsByMaterial(String material) {
	//		
	//		List<Product> products = productDao.findAllByMaterial(material);
	//		List<ProductDto> productDto = products.stream().map(product -> this.productToProductDto(product)).collect(Collectors.toList());
	//		
	//		return productDto;
	//	}

	@Override
	public List<ProductDto> getAllProductsByName(String productName) {

		List<Product> products = productDao.findAll();
		List<Product> plist = new ArrayList();

		Iterator <Product> p = products.iterator();
		while(p.hasNext()) {
			Product product = p.next();
			if(product.getProductName().equals(productName)) {

				plist.add(product);
			}
		}
		List<ProductDto> productDto = plist.stream().map(product -> this.productToProductDto(product)).collect(Collectors.toList());

		return productDto;
	}

	@Override
	public ProductDto getProductById(Integer pId) {

		Product product = productDao.findById(pId)
				.orElseThrow(()-> new ResourceNotFoundException("Product","pId",pId));

		return this.productToProductDto(product);
	}

	@Override
	public void deleteProductById(Integer pId) {

		Product product = productDao.findById(pId).orElseThrow(()-> new ResourceNotFoundException("Product","pId",pId));
		productDao.delete(product);
	}

	@Override
	public void deleteProductByName(String productName) {

		List<Product> products = productDao.findAll();

		Iterator<Product> p =products.iterator();
		while(p.hasNext()) {
			Product product = p.next();
			if(product.getProductName().equals(productName)) {
				p.remove();
			}

		}
	}

	// This method converting ProductDto object into Product object
	public Product productDtoToProduct(ProductDto productDto) {

		Product product = new Product();
		product.setProductId(productDto.getProductId());
		product.setProductName(productDto.getProductName());
		product.setDescription(productDto.getDescription());
		product.setCategory(productDto.getCategory());
		product.setMaterial(productDto.getMaterial());
		product.setPrice(productDto.getPrice());
		product.setStock(productDto.getStock());
		

		return product;

	}

	// This method converting Product object into ProductDto object
	public ProductDto productToProductDto(Product product) {

		ProductDto productDto = new ProductDto();
		productDto.setProductId(product.getProductId());
		productDto.setProductName(product.getProductName());
		productDto.setDescription(product.getDescription());
		productDto.setCategory(product.getCategory());
		productDto.setMaterial(product.getMaterial());
		productDto.setPrice(product.getPrice());
		productDto.setStock(product.getStock());
		

		return productDto;

	}

	private ShopDetails getValidShopDetails(Integer userId) {
		Optional<ShopDetails> shop = shopDao.findById(userId);
		if (!shop.isPresent()) 
		{
			throw new RuntimeException("some exception"); //!!!do not place any business info such as "user with id={userId} not found" because of a scam risc reasons
		}
		return shop.get();
	}




}
