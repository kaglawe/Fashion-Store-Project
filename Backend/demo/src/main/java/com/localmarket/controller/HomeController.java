package com.localmarket.controller;

import java.util.List;
import java.util.Map;


import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.localmarket.payloads.UserDto;
import com.localmarket.service.EmailSenderService;
import com.localmarket.service.EmailSenderServiceImpl;
import com.localmarket.service.UserService;
@RestController
@RequestMapping("/home")
@CrossOrigin("*")
public class HomeController {



	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserService userService;

	@Autowired
	private EmailSenderService emailSenderService;

	// post - create user
	@PostMapping("/register")
	public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto,HttpSession session) {

		userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));

		UserDto flag = userService.checkEmail(userDto.getEmail());
		if(flag != null)
		{		
			return new ResponseEntity(Map.of("message","Email already exists please login or use another emailid"),HttpStatus.OK);
		}
		UserDto createUserDto = userService.createUser(userDto);
		if(createUserDto != null)
		{
			//			return new ResponseEntity(Map.of("message",	"register successfully"),HttpStatus.OK);
			String subject = "Welcome to Fashion Store"+" "+createUserDto.getFirstName()+"..!!";
			String message ="Dear"+" "+createUserDto.getFirstName()+","+"\n\nWelcome to Fashion Store Software.Thank you for choosing our website."
					+ "\n\nSign in to Our website & see What's trending in your Local Clothing stores.Hope you will enjoy Our Services..Have Fun..!!";


			String to=createUserDto.getEmail();
			String msg = null;
			try {
				msg=emailSenderService.sendEmail(subject,message,to);
			} catch (MailException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (InterruptedException e) {
				e.printStackTrace(); 
			}
			return new ResponseEntity(Map.of("message",	"register successfully"),HttpStatus.OK); 

		}
		else
		{
			return new ResponseEntity(Map.of("message","something wrong"),HttpStatus.OK);

		}
		//		return new ResponseEntity<>(createUserDto,HttpStatus.CREATED);

	}

	@PostMapping("/login")

	public ResponseEntity<UserDto> loginUser(@RequestBody UserDto user)
	{
		UserDto loginUser=userService.checkEmail(user.getEmail());
		System.out.println(loginUser.getUserId());
		if(loginUser!=null)
		{
			if(passwordEncoder.matches(user.getPassword(),loginUser.getPassword()))
			{
				return ResponseEntity.ok(loginUser);
			}
			else
				return new ResponseEntity("Wrong Password ",HttpStatus.NOT_FOUND);
		}
		else
			return new ResponseEntity("Wrong Email ",HttpStatus.NOT_FOUND);
	}

	// PUT - update user
	@PutMapping("update/{userId}")
	public ResponseEntity<UserDto> updateUser(@RequestBody UserDto userDto,@PathVariable Integer userId) {

		UserDto updatedUser = userService.updateUser(userDto, userId);
		return ResponseEntity.ok(updatedUser);
	}




}
