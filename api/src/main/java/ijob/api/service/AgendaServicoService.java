package ijob.api.service;

import ijob.api.model.AgendaServico;
import ijob.api.repository.AgendaServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgendaServicoService {
    @Autowired
    private AgendaServicoRepository agendaServicoRepository;

    public List<AgendaServico> findByPrestadorId(long id){
        try {
            return agendaServicoRepository.findByPrestadorId(id);

        }catch (RuntimeException exception){

            throw exception;
        }
    }
    public List<AgendaServico> findByUsuarioId(long id){
        try {
            return agendaServicoRepository.findByUsuarioId(id);

        }catch (RuntimeException exception){

            throw exception;
        }
    }

    public AgendaServico createAgendaServico(AgendaServico agendaServico){
        try {
            return agendaServicoRepository.save(agendaServico);
        }
        catch (RuntimeException exception){
            throw exception;
        }
    }

    public AgendaServico updateSePrestador(Long servicoId, Boolean seConcluido){
        try {
            var result = agendaServicoRepository.findById(servicoId).orElseThrow(()
                    -> new RuntimeException("Serviço não encontrado"));
            result.setSeConcluido(seConcluido);

            return agendaServicoRepository.save(result);
        }
        catch (RuntimeException exception){
            throw exception;
        }

    }

    public List<AgendaServico> getAll(){
        return  agendaServicoRepository.findAll();
    }
    public AgendaServico findById(Long id){
        var result = agendaServicoRepository.findById(id);
        return  result.get();
    }

}
