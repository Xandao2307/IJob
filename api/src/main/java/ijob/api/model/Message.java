package ijob.api.model;

import java.time.LocalDateTime;

import ijob.api.controller.dto.MessageDTO;
import jakarta.persistence.*;

@Entity
@Table
public class Message {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private Long chatId;

	@Column(nullable = false)
	private String text;

	@Column(nullable = false)
	private LocalDateTime created;

	@Column(nullable = false)
	private Long userId;

	
	public Message(MessageDTO msg) {}


	public Message() {}

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getChat() {
		return chatId;
	}

	public void setChatId(Long chatId) {
		this.chatId = chatId;
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
