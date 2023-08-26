package com.localmarket.service;

import java.util.List;

import com.localmarket.beans.User;
import com.localmarket.payloads.UserDto;

public interface UserService {

	UserDto createUser(UserDto user);
	
	UserDto updateUser(UserDto user,Integer userId);
	
	UserDto getUserById(Integer userId);
	
	List<UserDto> getAllUsers();
	
	void deleteUser(Integer userId);
	
	public UserDto checkEmail(String email);

	Object getUserByEmailandPassword(String email, String password);

	int setNewPassword(User user);
}
