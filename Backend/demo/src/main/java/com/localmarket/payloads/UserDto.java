package com.localmarket.payloads;

import java.util.List;

import com.localmarket.beans.ShopDetails;
import com.localmarket.beans.User;

//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;

//@NoArgsConstructor
//@Getter
//@Setter
public class UserDto {

	private int userId;
	
	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private String password;
	
	private String role;
	
	private boolean status;
	
	private String contactNo;
	
	private List<ShopDetails> allShops;


	// parameterless constructor
	public UserDto() {
		super();
	}
	
	// parameterize constructor
	public UserDto(String firstName, String lastName, String email, String password, String role, boolean status,
			String contactNo,List<ShopDetails> allShops) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
		this.status = status;
		this.contactNo = contactNo;
		this.allShops=allShops;
	}
	
	public UserDto(User user) {
		this.userId=user.getUserId();
		this.firstName=user.getFirstName();
		this.lastName=user.getLastName();
		this.email=user.getEmail();
		this.password=user.getPassword();
		this.role=user.getRole();
		this.status=user.getStatus();
		this.contactNo=user.getContactNo();
		this.allShops=user.getAllShops();
	}

	public List<ShopDetails> getAllShops() {
		return allShops;
	}

	public void setAllShops(List<ShopDetails> allShops) {
		this.allShops = allShops;
	}

	// Getter and Setter methods
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
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
	
}
