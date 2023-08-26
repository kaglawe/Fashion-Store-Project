package com.localmarket.service;

import java.util.List;

import com.localmarket.payloads.ShopDetailsDto;

public interface ShopService 
{

	public ShopDetailsDto addNewShop(ShopDetailsDto shopDto, Integer userId);

	public List<ShopDetailsDto> getShopById(Integer userId);

	public List<ShopDetailsDto> getShopByPin(Integer pincode);

	public void deleteShopById(Integer shopId);



}
