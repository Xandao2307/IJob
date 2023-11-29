package ijob.api.controller.dto;

import java.time.LocalDateTime;

import ijob.api.model.Message;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;


public class MessageDTO {

	private Long id;
	private String text;
	private LocalDateTime created;
	private Long userId;
	
	public static MessageDTO converter(Message m) {
		MessageDTO message =  new MessageDTO();
		
		message.setId(m.getId());
		message.setText(m.getText());
		message.setCreated(m.getCreated());
		message.setUserId(m.getUserId());
		
		return message;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public String getText() {
		return text;
	}

	public void setText(String _text) {
		text = _text;
	}

	public LocalDateTime getCreated() {
		return created;
	}

	public void setCreated(LocalDateTime created) {
		this.created = created;
	}
	
	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
}
