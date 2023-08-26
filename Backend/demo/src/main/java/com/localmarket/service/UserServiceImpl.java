package com.localmarket.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.localmarket.exceptions.*;

import com.localmarket.payloads.UserDto;
import com.localmarket.beans.User;
import com.localmarket.dao.*;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao UserDao;
	
	

	@Override
	public UserDto createUser(UserDto userDto) {
		
		User user = this.dtoToUser(userDto);
		
		User savedUser = UserDao.save(user);
		return this.userToUserDto(savedUser);
	}

	
	@Override
	public UserDto updateUser(UserDto userDto, Integer userId) {
		
		User user = UserDao.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","id",userId));
		
		user.setFirstName(userDto.getFirstName());
		user.setLastName(userDto.getLastName());
		user.setEmail(userDto.getEmail());
		user.setPassword(userDto.getPassword());
		user.setRole(userDto.getRole());
		user.setContactNo(userDto.getContactNo());
		
		User updatedUser = UserDao.save(user);
		UserDto userDto1 = this.userToUserDto(updatedUser);
		
		return userDto1;
	}
	
	

	@Override
	public UserDto getUserById(Integer userId) {
		
		User user = UserDao.findById(userId)
				.orElseThrow(()-> new ResourceNotFoundException("User","Id",userId));
		
		return this.userToUserDto(user);
	}

	@Override
	public List<UserDto> getAllUsers() {
		
		List<User> users = UserDao.findAll();
		List<UserDto> userDtos = users.stream().map(user-> this.userToUserDto(user)).collect(Collectors.toList());
		
		return userDtos;
	}

	@Override
	public void deleteUser(Integer userId) {
		
		User user = UserDao.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","Id",userId));
		UserDao.delete(user);
	}
	
	@Override
	public UserDto checkEmail(String email) { 

		User user = UserDao.findByEmail(email);
		if (user != null)
		{
			return this.userToUserDto(user);
		}
		return null;
	}
	
	@Override
	public UserDto getUserByEmailandPassword(String email, String password) {
		
		
		User user = UserDao.findByEmailAndPassword(email,password);
		if(user != null)
		{
			return this.userToUserDto(user);
		}
		return null;
	}

	@Override
	public int setNewPassword(User user) {
		
		User u= UserDao.findByEmail(user.getEmail());
		System.out.println(u);
		String newPassword=user.getPassword();
		if(u!=null)
		{
			u.setPassword(newPassword);
			UserDao.save(u);
			return 1;
		}
		return 0;
	
	}

	private User dtoToUser(UserDto userDto) {
		
		User user = new User();
		
		user.setFirstName(userDto.getFirstName());
		user.setLastName(userDto.getLastName());
		user.setEmail(userDto.getEmail());
		user.setPassword(userDto.getPassword());
		user.setRole(userDto.getRole());
		user.setContactNo(userDto.getContactNo());
		user.setUserId(userDto.getUserId());
		
		return user;
	}
	
	private UserDto userToUserDto(User user) {
		
		UserDto userDto = new UserDto();
		
		userDto.setUserId(user.getUserId());
		userDto.setFirstName(user.getFirstName());
		userDto.setLastName(user.getLastName());
		userDto.setEmail(user.getEmail());
		userDto.setPassword(user.getPassword());
		userDto.setRole(user.getRole());
		userDto.setContactNo(user.getContactNo());
		
		return userDto;
		
	}


	




}
