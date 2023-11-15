package ijob.api.controller.dto;

import java.util.List;


public class ChatDTO {


	private Long chatId;
	private List<MessageDTO> messages;
	
	
	public Long getChatId() {
		return chatId;
	}

	public void setChatId(Long id) {
		chatId = id;
	}


	public List<MessageDTO> getMessages() {
		return messages;
	}

	public void setMessages(List<MessageDTO> messages) {
		this.messages = messages;
	}
	
}
