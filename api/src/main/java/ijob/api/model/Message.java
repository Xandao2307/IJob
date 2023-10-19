package ijob.api.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table
public class Message {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(targetEntity = ChatModel.class)
	private ChatModel chat;

	@Column(nullable = false)
	private String Text;

	@Column(nullable = false)
	private LocalDateTime created;

	@Column(nullable = false)
	private Long userId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ChatModel getChat() {
		return chat;
	}

	public void setChat(ChatModel chatId) {
		this.chat = chatId;
	}

	public String getText() {
		return Text;
	}

	public void setText(String text) {
		Text = text;
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
