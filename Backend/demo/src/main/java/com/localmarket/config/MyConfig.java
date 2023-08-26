package com.localmarket.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class MyConfig extends WebSecurityConfigurerAdapter {

	private UserDetailsServiceImpl userDetailsServiceImpl;

	@Bean
	public PasswordEncoder passwordEncoder()
	{
		return new BCryptPasswordEncoder();
	}

	//	Constructor 
	public MyConfig(UserDetailsServiceImpl userDetailsServiceImpl)
	{
		this.userDetailsServiceImpl = userDetailsServiceImpl;
	}

	//Configure Method
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception 
	{
		auth.userDetailsService(userDetailsServiceImpl).passwordEncoder(passwordEncoder());
	}



	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.rememberMe().tokenValiditySeconds(30000).key("Whataever!").rememberMeParameter("CheckRememberMe");
		http.csrf().disable();
	}

	//	@Bean
	//	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)throws Exception{
	//
	//		return authenticationConfiguration.getAuthenticationManager();
	//	}
	//
	//	@Bean
	//	public SecurityFilterChain filterchain(HttpSecurity http)throws Exception{
	//		http.csrf().disable();
	//
	//		http.formLogin().defaultSuccessUrl("/home/login", true);
	//		return http.build();
	//	}
}
