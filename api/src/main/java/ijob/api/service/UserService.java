package ijob.api.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ijob.api.controller.dto.ImageDTO;
import ijob.api.controller.dto.ServicoDTO;
import ijob.api.controller.dto.UserDTO;
import ijob.api.model.Servico;
import ijob.api.model.UserModel;
import ijob.api.repository.ImageRepository;
import ijob.api.repository.ServicoRepository;
import ijob.api.repository.UserRepository;

@Service
public class UserService {
	private final ImageRepository imageRepository;
	private final ServicoRepository servicoRepository;
	private final UserRepository userRepository;

	@Autowired
	public UserService(ImageRepository imageRepository, ServicoRepository servicoRepository,
			UserRepository userRepository) {

		this.imageRepository = imageRepository;
		this.servicoRepository = servicoRepository;
		this.userRepository = userRepository;
	}

	public UserDTO getUserWithServicosAndImages(Long id) {

		Optional<UserModel> user = userRepository.findById(id);

		if (user.isPresent()) {
			UserDTO userWithServicoAndImages = new UserDTO(user.get());

			var imgs = imageRepository.findByClientId(id);
			var servicos = servicoRepository.findByClientId(id);

			userWithServicoAndImages.setImagens(imgs.stream().map(ImageDTO::converter).collect(Collectors.toList()));
			userWithServicoAndImages
					.setServicos(servicos.stream().map(ServicoDTO::converter).collect(Collectors.toList()));

			return userWithServicoAndImages;
		}

		return new UserDTO();

	}

	public void addServicos(List<ServicoDTO> servicos, Long id) {

		for (ServicoDTO _servico : servicos) {

			
			Servico servico = new Servico();
			
			servico.setName(_servico.getName());
			servico.setCodigo(_servico.getCodigo());
			servico.setClientId(id);
			
			servicoRepository.save(servico);
		}

	}

}
