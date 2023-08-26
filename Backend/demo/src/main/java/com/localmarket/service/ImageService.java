package com.localmarket.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.localmarket.beans.Image;

public interface ImageService {

	public Image addImage(MultipartFile file, Integer productId) throws IOException;

	public byte[] downloadImages(Integer productId);

}
