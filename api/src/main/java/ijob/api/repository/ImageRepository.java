package ijob.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ijob.api.model.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {
	List<Image> findByClientId(Long id);
}
