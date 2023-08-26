package com.localmarket.payloads;

import java.util.List;

import com.localmarket.beans.Product;
import com.localmarket.beans.User;

public class ShopDetailsDto 
{
	private User user;
	private int shopId;
	private String shopName;
	private String shopAddress;
	private int pincode;
	private String category;
	private List<Product> products;

	public ShopDetailsDto() 
	{
		super();
	}

	public ShopDetailsDto(User user,int shopId, String shopName, String shopAddress, int pincode, String category,List<Product> products) 
	{
		super();
		this.user =user;
		this.shopId = shopId;
		this.shopName = shopName;
		this.shopAddress = shopAddress;
		this.pincode = pincode;
		this.category = category;
		this.products= products;
	}

	public User getUser() 
	{
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getShopId() {
		return shopId;
	}

	public  void setShopId(int shopId) {
		this.shopId = shopId;
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public String getShopAddress() {
		return shopAddress;
	}

	public void setShopAddress(String shopAddress) {
		this.shopAddress = shopAddress;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	
	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	







}
