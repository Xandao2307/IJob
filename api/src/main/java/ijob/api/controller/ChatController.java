package ijob.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ijob.api.controller.dto.ChatDTO;
import ijob.api.controller.dto.ListChatDTO;
import ijob.api.controller.dto.MessageDTO;
import ijob.api.model.Message;
import ijob.api.service.ChatService;

@RestController
@RequestMapping("/chat")
public class ChatController {

	//private final ChatRepository chatRepository;
	private final ChatService service;

	@Autowired
	public ChatController(ChatService service) {
		this.service = service;
	}
	
	
	@GetMapping("/start")
	public ChatDTO Start(@RequestParam Long sendUserId,  @RequestParam Long receiveUserId) {
		return service.startChat(sendUserId, receiveUserId);
	}
	
	@GetMapping("/list")
	public List<Object[]> Start(@RequestParam Long id) {
		return service.listChats(id);
	}
	
	@PostMapping("/message")
	public Message Message(@RequestBody Message msg) {
		return service.addMessage(msg);
	}
}
