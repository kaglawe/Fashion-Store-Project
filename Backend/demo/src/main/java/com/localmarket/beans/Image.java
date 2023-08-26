package com.localmarket.beans;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToOne;
import javax.persistence.CascadeType;

@Entity
@Table(name="ProductImage")
public class Image {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int imageId;
	private String name;
	private String type;
	@Lob
	private byte[] imageData;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="productId")
	private Product product;
	
	public Image() {
		super();
	}

	public Image(int imageId, String name, String type, byte[] imageData, Product product) {
		super();
		this.imageId = imageId;
		this.name = name;
		this.type = type;
		this.imageData = imageData;
		this.product = product;
	}

	public int getImageId() {
		return imageId;
	}

	public void setImageId(int imageId) {
		this.imageId = imageId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public byte[] getImageData() {
		return imageData;
	}

	public void setImageData(byte[] imageData) {
		this.imageData = imageData;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	
	
	
	
	
}

