package com.localmarket.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.localmarket.beans.Image;

public interface ImageDao extends JpaRepository <Image,Integer>{

	Image findByProduct_ProductId(int productId);

}
