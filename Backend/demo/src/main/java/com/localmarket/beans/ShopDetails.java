package com.localmarket.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="Shop_Details")
public class ShopDetails {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int shopId;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="userId")
	private User user;
	
	private String shopName;
	
	private String shopAddress;
	
	private int pincode;
	
	private String category;
	
	@OneToMany(cascade=CascadeType.ALL,mappedBy = "shopDetails",fetch=FetchType.EAGER)
//	@JoinColumn(name="shopId")
	private List<Product> products;
	
	
	// default constructor
	public ShopDetails() {
		super();
	}

	// Getter and Setter methods
	public int getShopId() {
		return shopId;
	}

	public void setShopId(int shopId) {
		this.shopId = shopId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
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
