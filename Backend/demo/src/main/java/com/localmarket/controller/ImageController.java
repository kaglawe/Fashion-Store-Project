package com.localmarket.controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.localmarket.beans.Image;
import com.localmarket.service.ImageService;
@RestController
@RequestMapping("/image")
@CrossOrigin("*")
public class ImageController {

	@Autowired
	private ImageService imageService;
	@PostMapping("/upload/{productId}")
	public ResponseEntity<?> uploadImage(@RequestParam("image")MultipartFile file,@PathVariable Integer productId) throws IOException
	{
		Image image=imageService.addImage(file,productId);

		if(image!=null)
		{
			return new ResponseEntity(Map.of("message",	"Image uploaded successfully"),HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity(Map.of("message","something wrong"),HttpStatus.OK);

		}

	}

	@GetMapping("fetch/{productId}")
	public ResponseEntity <byte[]> downloadImage(@PathVariable Integer productId){

		byte[] image = imageService.downloadImages(productId);

		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/jpg")).body(image);
	}

	//	@GetMapping("fetch/{shopId}")
	//	public ResponseEntity <List<byte[]>> downloadImage(@PathVariable Integer shopId){
	//
	//		List<byte[]> images = imageService.downloadImages(shopId);
	//
	//		return ResponseEntity.status(HttpStatus.OK)./*contentType(MediaType.valueOf("image/jpg")).*/body(images);
	//	}
}