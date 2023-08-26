package com.localmarket.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.localmarket.beans.Image;
import com.localmarket.beans.Product;
import com.localmarket.dao.ImageDao;
import com.localmarket.dao.ProductDao;
import com.localmarket.payloads.ProductDto;

@Service
public class ImageServiceImpl implements ImageService {

	@Autowired 
	private ImageDao imageDao;

	@Autowired
	private ProductDao productDao;

	//	@Autowired
	//	private ProductServiceImpl productServiceImpl;

	@Override
	public Image addImage(MultipartFile file, Integer productId) throws IOException {

		Product product =productDao.findById(productId).orElseThrow();
		Image image =new Image();
		image.setProduct(product);
		image.setName(file.getOriginalFilename());
		image.setType(file.getContentType());
		image.setImageData(ImageUtil.compressImage(file.getBytes()));

		return imageDao.save(image);
	}

	@Override
	public byte[] downloadImages(Integer productId) {

		Image img= imageDao.findByProduct_ProductId(productId);

		return ImageUtil.decompressImage(img.getImageData());
	}


	//	@Override
	//	public List<byte[]> downloadImages(Integer shopId) {
	//		List<Image> ilist=new ArrayList<>();
	//		List<ProductDto> productDto=productServiceImpl.getAllProducts(shopId);
	//		List<Product> prolist=productDto.stream().map(product -> productServiceImpl.productDtoToProduct(product)).collect(Collectors.toList());
	//		Iterator <Product> p=prolist.iterator();
	//		while(p.hasNext())
	//		{
	//			Product pro=p.next();
	//			Image images=imageDao.findByProduct_ProductId(pro.getProductId());
	//			//byte[] b=ImageUtil.decompressImage(images.getImageData());
	//			ilist.add(images);
	//		}	
	//		List<byte[]>blist=new ArrayList<>();
	//		for(Image image : ilist)
	//		{
	//			blist.add(image.getImageData());
	//		}
	//		return blist;
	//	}



}
