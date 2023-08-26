package com.localmarket.service;

import org.springframework.mail.MailException;


public interface EmailSenderService 
{
	String sendEmail(String toEmail, String body, String subject) throws MailException, InterruptedException;
}
