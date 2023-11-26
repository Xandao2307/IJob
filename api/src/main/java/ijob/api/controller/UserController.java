package ijob.api.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import ijob.api.controller.dto.SimpleUserDTO;
import ijob.api.controller.dto.UserDTO;
import ijob.api.model.UserModel;
import ijob.api.repository.UserRepository;
import ijob.api.service.UserService;
import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/users")
public class UserController {

	private final UserRepository userRepository;
	private final UserService userService;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Autowired
	public UserController(UserRepository userRepository, UserService userService) {
		this.userRepository = userRepository;
		this.userService = userService;
	}

	@GetMapping
	public List<UserDTO> getAll() {
		var users = userRepository.findAll();

		return users.stream().map(UserDTO::converter).collect(Collectors.toList());
	}

	
	@GetMapping("/independents")
	public List<UserDTO> getIndependents() {
		var users = userRepository.findIndependent();

		return users.stream().map(UserDTO::converter).collect(Collectors.toList());
	}
	
	@GetMapping("/independents/{code}")
	public List<UserDTO> getIndependentsByServico(@PathVariable String code) {
		var users = userRepository.findByServico(code);

		return users.stream().map(UserDTO::converter).collect(Collectors.toList());
	}

	@GetMapping("/{id}")
	public UserDTO getById(@PathVariable Long id) {

		UserDTO user = userService.getUserWithServicosAndImages(id);
		return user;
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public UserModel Create(@RequestBody SimpleUserDTO _user) {
		try {
			UserModel user = new UserModel(_user);

			user.setPassword(passwordEncoder.encode(user.getPassword()));

			UserModel userSaved = userRepository.save(user);

			userService.addServicos(_user.getServicos(), userSaved.getId());

			return userSaved;
		} catch (Exception e) {
			return null;
		}
	}

	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity<Object> Update(@PathVariable Long id, @RequestBody UserModel newUser) {

		try {
			Optional<UserModel> user = userRepository.findById(id);

			if (user.isPresent()) {
				System.out.printf("ACHOU");
				newUser.setId(user.get().getId());

				return ResponseEntity.ok(userRepository.save(newUser));

			} else {
				System.out.println("NAO ACHOU");
				return ResponseEntity.notFound().build();
			}

		} catch (Exception e) {
			return ResponseEntity.internalServerError().build();
		}
	}
}
