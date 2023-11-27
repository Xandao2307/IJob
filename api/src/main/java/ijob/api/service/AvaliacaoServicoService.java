package ijob.api.service;

import ijob.api.model.AvaliacaoServico;
import ijob.api.repository.AvaliacaoServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvaliacaoServicoService {

    @Autowired
    private AvaliacaoServicoRepository avaliacaoServicoRepository;

    public List<AvaliacaoServico> findAll(){
        try {
            return avaliacaoServicoRepository.findAll();
        }
        catch (RuntimeException e){
            throw e;
        }
    }
    public AvaliacaoServico findById(Long id){
        try {
            return avaliacaoServicoRepository.findById(id).get();
        }
        catch (RuntimeException e){
            throw e;
        }
    }

    public AvaliacaoServico findByAgendaServicoId(Long id){
       try {
           return findByAgendaServicoId(id);
       }
       catch (RuntimeException e){
           throw e;
       }
    }
    public List<AvaliacaoServico> findByAgendaPrestadorId(Long id){
        try {
            return avaliacaoServicoRepository.findByAgendaServico_PrestadorId(id);
        }
        catch (RuntimeException e){
            throw e;
        }
    }
    public AvaliacaoServico createAvaliacaoServico(AvaliacaoServico avaliacaoServico){
        try {
            return avaliacaoServicoRepository.save(avaliacaoServico);
        }
        catch (RuntimeException e){
            throw e;
        }
    }

}
