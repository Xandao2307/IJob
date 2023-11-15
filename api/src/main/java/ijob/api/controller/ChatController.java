package ijob.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ijob.api.controller.dto.ChatDTO;
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
	public ChatDTO Start(@RequestParam Long clientId,  @RequestParam Long independentId) {
		return service.startChat(clientId, independentId);
	}
	
	@PostMapping("/message")
	public void Message(@RequestBody Message msg) {
		System.out.println("AQUI");
		service.addMessage(msg);
	}
}
