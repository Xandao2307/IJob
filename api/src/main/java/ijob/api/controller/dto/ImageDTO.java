package ijob.api.controller.dto;

import ijob.api.model.Image;
import ijob.api.model.Message;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

public class ImageDTO {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long clientId;
	private String url;
	
	public static ImageDTO converter(Image i) {
		ImageDTO image =  new ImageDTO();
		
		image.setUrl(i.getUrl());

		return image;
	}
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getClientId() {
		return clientId;
	}
	public void setClientId(Long clientId) {
		this.clientId = clientId;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}

}
