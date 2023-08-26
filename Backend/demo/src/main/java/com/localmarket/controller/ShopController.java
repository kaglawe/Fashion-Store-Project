package com.localmarket.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.localmarket.payloads.ProductDto;
import com.localmarket.payloads.ShopDetailsDto;
import com.localmarket.payloads.UserDto;
import com.localmarket.service.EmailSenderService;
import com.localmarket.service.ShopService;

@RestController
@RequestMapping("/shops/")
@CrossOrigin("*")
public class ShopController 
{
	@Autowired
	private ShopService shopService;

	@Autowired
	private EmailSenderService emailSenderService;

	// post - add new Shop
	@PostMapping("addshop/{userId}")
	public ResponseEntity<ShopDetailsDto> createShop(@RequestBody ShopDetailsDto shopDto,@PathVariable Integer userId){

		ShopDetailsDto createdShop = shopService.addNewShop(shopDto,userId);

		if(createdShop != null)
		{
			//			return new ResponseEntity(Map.of("message",	"register successfully"),HttpStatus.OK);
			String subject = "Congratulations..Shop Registered Successfully..!!";
			String message ="Dear"+" "+createdShop.getUser().getFirstName()+","+"\n\nWelcome to LocalMarket Software.Thank you for registering your shop on our website."
					+ "\n\nUse our platform to expand your Shop Digitally..Hope this website will help you in growth of your Buisness..Lets make World closer..!!";


			String to=createdShop.getUser().getEmail();
			try {
				emailSenderService.sendEmail(subject,message,to);
			} catch (MailException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			return new ResponseEntity (createdShop,HttpStatus.CREATED);

		}
		else
		{
			return new ResponseEntity(Map.of("message","something wrong"),HttpStatus.OK);

		}
	}

	@GetMapping("getshop/{userId}")
	public ResponseEntity <List<ShopDetailsDto>> getShop(@PathVariable Integer userId){
		return ResponseEntity.ok(shopService.getShopById(userId));
	}

	//this method will give shop by pincode.	
	@GetMapping("getallshop/{pincode}")
	public ResponseEntity <List<ShopDetailsDto>> getShopsByPincode(@PathVariable Integer pincode)
	{
		return ResponseEntity.ok(shopService.getShopByPin(pincode));
	}

	//DELETE - delete product
	@DeleteMapping("delete/{shopId}")
	public ResponseEntity<?> deleteShop(@PathVariable Integer shopId) {
		shopService.deleteShopById(shopId);

		return new ResponseEntity(Map.of("message","Product deleted successfully"),HttpStatus.OK);
	}







}
