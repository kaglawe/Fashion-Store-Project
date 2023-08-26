package com.localmarket.beans;



import java.util.ArrayList;
import java.util.Arrays;

//import lombok.NoArgsConstructor;
//import lombok.Getter;
//import lombok.Setter;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="Users")
//@NoArgsConstructor
//@Getter
//@Setter
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	
	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private String password;
	
	private String role;
	
	private boolean status;

	private String contactNo;
	
	@OneToMany(cascade=CascadeType.ALL,mappedBy = "user",fetch=FetchType.EAGER)
//	@JoinColumn(name="userId")
	private List<ShopDetails> allShops;

	// No-Argument Constructor
	public User() {
		super();
	}
	
	public List<ShopDetails> getAllShops() {
		return allShops;
	}

	public void setAllShops(List<ShopDetails> allShops) {
		this.allShops = allShops;
	}
	
	//Getter and Setter methods
	public boolean getStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int UserId) {
		this.userId = UserId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	public List<String> getRoleList() {
		if (this.role.length() > 0) {
			return Arrays.asList(this.role.split(","));
		}

		return new ArrayList<String>();
	}
	
}
