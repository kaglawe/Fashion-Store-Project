package com.localmarket.payloads;

import com.localmarket.beans.ShopDetails;

public class ProductDto {
	
	private int productId;
	private String productName;
	private String description;
	private String material;
	private int stock;
	private double price;
	private String category;
	private ShopDetails shopDetails;
	
	// parameterless constructor
	public ProductDto() {
		super();
	}
	
	// Parameterize constructor
	public ProductDto(String productName, String description, String material, int stock, double price, String category,ShopDetails shopDetails) {
		super();
		this.productName = productName;
		this.description = description;
		this.material = material;
		this.stock = stock;
		this.price = price;
		this.category = category;
		this.shopDetails=shopDetails;
	}
     
	
	public ShopDetails getShopDetails() {
		return shopDetails;
	}

	public void setShopDetails(ShopDetails shopDetails) {
		this.shopDetails = shopDetails;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getProductId() {
		return productId;
	}
	
	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}
   
	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}	

}
