package com.localmarket.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.localmarket.beans.User;

public interface UserDao extends JpaRepository<User,Integer> {
	
	public User findByEmail(String email);

	public User findByEmailAndPassword(String email, String password);

}
