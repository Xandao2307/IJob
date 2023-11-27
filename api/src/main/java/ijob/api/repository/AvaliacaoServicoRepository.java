package ijob.api.repository;

import ijob.api.model.AvaliacaoServico;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AvaliacaoServicoRepository extends JpaRepository<AvaliacaoServico, Long> {
    List<AvaliacaoServico> findByAgendaServico_Id(Long id);
    List<AvaliacaoServico> findByAgendaServico_PrestadorId(Long prestadorId);


}
