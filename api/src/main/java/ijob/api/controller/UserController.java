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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import ijob.api.controller.dto.UserDTO;
import ijob.api.model.UserModel;
import ijob.api.repository.UserRepository;
import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/users")
public class UserController {

	private final UserRepository userRepository;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Autowired
	public UserController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@GetMapping
	public List<UserDTO> getAll() {
		var users = userRepository.findAll();

//		for (ijob.api.model.User u : users) {
//			return (List<UserDTO>) UserDTO.converter(u);
//		}

		return users.stream().map(UserDTO::converter).collect(Collectors.toList());
	}

	@GetMapping("/{id}")
	public Optional<UserDTO> getById(@PathVariable Long id) {
		Optional<UserModel> user = userRepository.findById(id);
		return user.map(UserDTO::converter);
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public UserModel Create(@RequestBody UserModel user) {
		try {
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			return userRepository.save(user);
		}
		catch (Exception e) {
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
