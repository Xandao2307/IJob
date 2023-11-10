package ijob.api.service;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ijob.api.controller.dto.ChatDTO;
import ijob.api.controller.dto.MessageDTO;
import ijob.api.controller.dto.UserDTO;
import ijob.api.model.ChatModel;
import ijob.api.model.Message;
import ijob.api.repository.ChatRepository;
import ijob.api.repository.MessageRepository;

@Service
public class ChatService {

	private final ChatRepository chatRepository;
	private final MessageRepository messageRepository;

	@Autowired
	public ChatService(ChatRepository chatRepository, MessageRepository messageRepository) {
		this.chatRepository = chatRepository;
		this.messageRepository = messageRepository;
	}

	public ChatDTO startChat(Long clientId, Long independentId) {

		ChatModel chat = chatRepository.findExistChat(clientId, independentId);
		ChatDTO chatWithMessages = new ChatDTO();

		if (chat != null) {
			Long chatId = chat.getId();
			var msgs = messageRepository.findByChatId(chatId);

			chatWithMessages.setChatId(chatId);

			chatWithMessages.setMessages(msgs.stream().map(MessageDTO::converter).collect(Collectors.toList()));

		} else {
			ChatModel newChat = new ChatModel(clientId, independentId);
			chatWithMessages.setChatId(chatRepository.save(newChat).getId());
		}

		return chatWithMessages;
	}

	public void addMessage(Message msg) {

		msg.setCreated(LocalDateTime.now());

		messageRepository.save(msg);
	}
}
