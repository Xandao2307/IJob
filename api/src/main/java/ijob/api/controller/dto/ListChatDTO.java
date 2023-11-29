package ijob.api.controller.dto;

import jakarta.persistence.Entity;

//@Entity
public class ListChatDTO {
	private Long id;
	private String name;
	private String text;

		
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}

	public void setName(String _name) {
		name = _name;
	}
	
	public String getText() {
		return text;
	}

	public void setText(String _text) {
		text = _text;
	}

}
