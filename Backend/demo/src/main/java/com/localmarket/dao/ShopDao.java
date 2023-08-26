package com.localmarket.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.localmarket.beans.ShopDetails;

public interface ShopDao  extends JpaRepository<ShopDetails,Integer> 
{

	List<ShopDetails> findAllByUser_UserId(Integer userId);

	ShopDetails findAllByPincode(Integer pincode);

}
