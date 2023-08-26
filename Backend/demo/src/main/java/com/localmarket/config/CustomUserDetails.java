package com.localmarket.config;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.localmarket.beans.User;

public class CustomUserDetails implements UserDetails {
	
	private User user;

	public CustomUserDetails(User user) {
		super();
		this.user = user;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		
		user.getRoleList().forEach(r -> {
			GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_" + r);
			authorities.add(authority);
		});
		
		return authorities;
	}

	@Override
	public String getPassword() {
		
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		
		return user.getEmail();
	}

	public String getFirstname()
	{
		return user.getFirstName();
	}
	
	public String getLastname()
	{
		return user.getLastName();
	}
	
	
	@Override
	public boolean isAccountNonExpired() {
		
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		
		return true;
	}

	@Override
	public boolean isEnabled() {
		
		return user.getStatus() == true ;
	}

}
