package com.localmarket.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.localmarket.beans.Product;
import com.localmarket.beans.ShopDetails;
import com.localmarket.beans.User;
import com.localmarket.dao.ShopDao;
import com.localmarket.dao.UserDao;
import com.localmarket.exceptions.ResourceNotFoundException;
import com.localmarket.payloads.ProductDto;
import com.localmarket.payloads.ShopDetailsDto;
import com.localmarket.payloads.UserDto;


@Service
public class ShopServiceImpl implements ShopService
{
	@Autowired
	private ShopDao shopDao;

	@Autowired
	private UserDao userDao;
	
	@Override
	public ShopDetailsDto addNewShop(ShopDetailsDto shopDto,Integer userId) {
		User user=this.getValidUser(userId);
		ShopDetails shop =this.dtoToShop(shopDto);
		shop.setUser(user);
		ShopDetails newShop =shopDao.save(shop);
		ShopDetailsDto newShopDto=this.shoptoShopDto(newShop);
		newShopDto.setUser(user);
		return newShopDto;
	}
	
	@Override
	public List<ShopDetailsDto> getShopById(Integer userId) {
	
		List<ShopDetails> shop = shopDao.findAll();
		List<ShopDetails> list = new ArrayList<ShopDetails>();
		
		Iterator <ShopDetails> s = shop.iterator();
		while(s.hasNext()) {
			ShopDetails shopDetails = s.next();
			if(shopDetails.getUser().getUserId()==userId) {
				
				list.add(shopDetails);
			}
		}
		List<ShopDetailsDto> shopDetailsDto = list.stream().map(shopDetails -> this.shoptoShopDto(shopDetails)).collect(Collectors.toList());
		
		return shopDetailsDto;
	}
	
	@Override
	public List<ShopDetailsDto> getShopByPin(Integer pincode) {
		List<ShopDetails> shop = shopDao.findAll();
		List<ShopDetails> list = new ArrayList<ShopDetails>();
		
		Iterator <ShopDetails> s = shop.iterator();
		while(s.hasNext()) {
			ShopDetails shopDetails = s.next();
			if(shopDetails.getPincode()==pincode) {
				
				list.add(shopDetails);
			}
		}
		List<ShopDetailsDto> shopDetailsDto = list.stream().map(shopDetails -> this.shoptoShopDto(shopDetails)).collect(Collectors.toList());
		
		return shopDetailsDto;
	}
	

	
	private User getValidUser(Integer userId) {
		Optional<User> user = userDao.findById(userId);
		if (!user.isPresent()) 
		{
			throw new RuntimeException("some exception"); //!!!do not place any business info such as "user with id={userId} not found" because of a scam risc reasons
		}
		return user.get();
	}
	
	@Override
	public void deleteShopById(Integer shopId) {
		ShopDetails shop = shopDao.findById(shopId).orElseThrow(()-> new ResourceNotFoundException("ShopDetails","shopId",shopId));
		
		shopDao.delete(shop);
		
	}

	private ShopDetails dtoToShop(ShopDetailsDto shopDto) {

		ShopDetails shop=new ShopDetails();

		shop.setShopId(shopDto.getShopId());
		shop.setShopName(shopDto.getShopName());
		shop.setShopAddress(shopDto.getShopAddress());
		shop.setPincode(shopDto.getPincode());
		shop.setCategory(shopDto.getCategory());

		return shop;
	}

	private ShopDetailsDto shoptoShopDto(ShopDetails shop) {

		ShopDetailsDto shopDto = new ShopDetailsDto();

		shopDto.setShopId(shop.getShopId());
		shopDto.setShopName(shop.getShopName());
		shopDto.setShopAddress(shop.getShopAddress());
		shopDto.setPincode(shop.getPincode());
		shopDto.setCategory(shop.getCategory());

		return shopDto;

	}

	

	
	
}
