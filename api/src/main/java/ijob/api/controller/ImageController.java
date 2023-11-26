package ijob.api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ijob.api.model.Image;
import ijob.api.repository.ImageRepository;

@RestController
@RequestMapping("/image")
public class ImageController {
	private final ImageRepository imageRepository;

	public ImageController(ImageRepository _imageRepository) {
		this.imageRepository = _imageRepository;
	}


	@PostMapping
	public void Message(@RequestBody Image img) {
		this.imageRepository.save(img);
	}
}
