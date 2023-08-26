package com.localmarket.service;

import java.io.ByteArrayOutputStream;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

public class ImageUtil {

	public static byte[] compressImage(byte[] data)
	{
		Deflater deflate = new Deflater();
		deflate.setLevel(deflate.BEST_COMPRESSION);
		deflate.setInput(data);
		deflate.finish();

		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] tmp = new byte[4*1024];
		while(!deflate.finished())
		{
			int size =deflate.deflate(tmp);
			outputStream.write(tmp,0,size);
		}
		try {
			outputStream.close();

		}catch(Exception e) {
			e.printStackTrace();
		}
		return outputStream.toByteArray();
	}
	
	public static byte[] decompressImage(byte[] data) {
        Inflater inflate = new Inflater();
        inflate.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] tmp = new byte[4*1024];
        try {
            while (!inflate.finished()) {
                int count = inflate.inflate(tmp);
                outputStream.write(tmp, 0, count);
            }
            outputStream.close();
        } catch (Exception e) {
        	e.printStackTrace();
        }
        return outputStream.toByteArray();
    }

}
