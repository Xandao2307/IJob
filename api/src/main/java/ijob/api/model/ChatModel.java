package ijob.api.model;

import java.util.ArrayList;

import jakarta.persistence.*;


@Entity
@Table(name = "chat")
public class ChatModel {

	@Id
	@GeneratedValue( strategy=GenerationType.IDENTITY )
	private Long id;
	
	@Column(nullable = false)
	private Long clientId;
	

	@Column(nullable = false)
	private Long independentId;
	
	
	public ChatModel() {}
	
	public ChatModel(Long id) {
		this.id = id;
	}
	
	public ChatModel(Long _clientId, Long _independentId) {
		this.clientId = _clientId;
		this.independentId = _independentId;
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

	public Long getIndependentId() {
		return independentId;
	}

	public void setIndependentId(Long independentId) {
		this.independentId = independentId;
	}
		
}
