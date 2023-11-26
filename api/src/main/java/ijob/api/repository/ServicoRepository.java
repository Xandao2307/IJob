package ijob.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ijob.api.model.Image;
import ijob.api.model.Servico;

public interface ServicoRepository extends JpaRepository<Servico, Long> {
	List<Servico> findByClientId(Long id);
}
