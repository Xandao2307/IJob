package ijob.api.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ijob.api.controller.dto.ChatDTO;
import ijob.api.controller.dto.ListChatDTO;
import ijob.api.controller.dto.MessageDTO;
import ijob.api.model.ChatModel;
import ijob.api.model.Message;
import ijob.api.repository.ChatRepository;
import ijob.api.repository.MessageRepository;
import jakarta.persistence.EntityManager;

@Service
public class ChatService {

	private final ChatRepository chatRepository;
	private final MessageRepository messageRepository;
	private final EntityManager em;

	@Autowired
	public ChatService(ChatRepository chatRepository, MessageRepository messageRepository,
			EntityManager em) {
		this.chatRepository = chatRepository;
		this.messageRepository = messageRepository;
		this.em = em;
	}

	public ChatDTO startChat(Long sendUserId, Long receiveUserId) {

		ChatModel chat = chatRepository.findExistChat(sendUserId, receiveUserId);
		ChatDTO chatWithMessages = new ChatDTO();

		if (chat != null) {
			Long chatId = chat.getId();
			var msgs = messageRepository.findByChatId(chatId);

			chatWithMessages.setChatId(chatId);

			chatWithMessages.setMessages(msgs.stream().map(MessageDTO::converter).collect(Collectors.toList()));

		} else {
			ChatModel newChat = new ChatModel(sendUserId, receiveUserId);
			chatWithMessages.setChatId(chatRepository.save(newChat).getId());
		}

		return chatWithMessages;
	}

	public Message addMessage(Message msg) {
		msg.setCreated(LocalDateTime.now());

		return messageRepository.save(msg);
	}

	@SuppressWarnings("unchecked")
	public List<Object[]> listChats(Long id) {

		return em.createQuery("SELECT u.name, u.id, msg.text" 
				+ " FROM UserModel u"
				+ " JOIN ChatModel chat ON chat.clientId =" + id 
				+ " OR chat.independentId =" + id
				+ " JOIN Message msg" 
				+ " ON msg.chatId = chat.id"
				+ " AND msg.userId = u.id"
				+ "	WHERE msg.created = "
				+ " (SELECT MAX(created)"
				+ " FROM Message WHERE chatId = chat.id)"
				+ " ORDER BY msg.created DESC")
				.getResultList();
	}
}
