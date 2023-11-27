package ijob.api.repository;

import ijob.api.model.AgendaServico;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AgendaServicoRepository extends JpaRepository<AgendaServico, Long> {
    List<AgendaServico> findByPrestadorId(Long prestadorId);
    List<AgendaServico> findByUsuarioId(Long prestadorId);

}
