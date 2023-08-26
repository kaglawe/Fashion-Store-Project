package com.localmarket.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

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

import com.localmarket.payloads.UserDto;
import com.localmarket.service.UserService;
@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService userService;

	
	// PUT - update user
	@PutMapping("update/{userId}")
	public ResponseEntity<UserDto> updateUser(@RequestBody UserDto userDto,@PathVariable Integer userId) {

		UserDto updatedUser = userService.updateUser(userDto, userId);
		return ResponseEntity.ok(updatedUser);
	}

	//DELETE - delete user
	@DeleteMapping("delete/{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable Integer userId) {
		userService.deleteUser(userId);

		return new ResponseEntity(Map.of("message","user deleted successfully"),HttpStatus.OK);
	}


	@GetMapping("/")
	public ResponseEntity <List<UserDto>> getAllUsers(){
		return ResponseEntity.ok(userService.getAllUsers());
	}

	@GetMapping("/{userId}")
	public ResponseEntity <UserDto> getSingleUsers(@PathVariable Integer userId){
		return ResponseEntity.ok(userService.getUserById(userId));
	}


}
