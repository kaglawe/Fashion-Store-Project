package com.localmarket.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.localmarket.beans.User;
import com.localmarket.dao.UserDao;


@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	private UserDao userDao;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		//we will fetch user by database
		User user=userDao.findByEmail(username);
		
		if (user==null)
		{
			throw new UsernameNotFoundException("Could Not found user..!!");
		}
		 
		CustomUserDetails customUserDetails = new CustomUserDetails(user);
		
		return customUserDetails;
	}

}
