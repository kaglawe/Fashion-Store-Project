package com.localmarket.controller;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.localmarket.beans.User;
import com.localmarket.payloads.UserDto;
import com.localmarket.service.EmailSenderService;
import com.localmarket.service.UserService;
@RestController
@RequestMapping("/forget")
@CrossOrigin("*")
public class ForgotPasswordController 
{
	Random random = new Random();

	@Autowired
	private UserService userService;

	@Autowired
	private EmailSenderService emailSenderService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;


	static int otp;
	@PostMapping("/verify")
	public ResponseEntity<UserDto> verifyEmailSendOTP(@RequestBody UserDto u1)
	{
		System.out.println(u1);
		UserDto user=userService.checkEmail(u1.getEmail());
		System.out.println(user.getUserId());
		if(user!=null)
		{ 
			otp = random.nextInt(999999);

			System.out.println("OTP "+otp);

			String subject = "Forgot Password : E-mail verification";
			String message ="OTP/Verification code to reset your password is : "+otp+"."
					+ "\nThis is an auto-generated email.Do not reply to this email.";


			String to=u1.getEmail();
			String msg = null;
			try {
				msg=emailSenderService.sendEmail(subject,message,to);
			} catch (MailException e) {
				e.printStackTrace();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			return new ResponseEntity(""+msg,HttpStatus.OK);  ///this ok enough to redirect user to enter otp page
		}

		return new ResponseEntity("Email not found!..check email and retry",HttpStatus.NOT_FOUND);
	}

	@PostMapping("/otp/{newotp}")
	public ResponseEntity<String> verifyOTP(@PathVariable Integer newotp)
	{
		if(otp==newotp)
		{
			return new ResponseEntity("verification successful",HttpStatus.ACCEPTED);
		}
		return new ResponseEntity("please enter correct otp",HttpStatus.EXPECTATION_FAILED);
	}

	@PutMapping("/newpass")
	public ResponseEntity<String> newPassword(@RequestBody User user)
	{
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		System.out.println(user.getPassword());
		int u=userService.setNewPassword(user);
		if(u>0)
		{
			return new ResponseEntity("Password updated Successfully",HttpStatus.OK);
		}

		return new ResponseEntity("Something went wrong..!!",HttpStatus.OK);

	}

}
