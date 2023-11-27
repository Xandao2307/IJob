package ijob.api.controller;

import ijob.api.model.AgendaServico;
import ijob.api.service.AgendaServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/agendaservico")

public class AgendaServicoController {
    @Autowired
    private AgendaServicoService agendaServicoService;

    @GetMapping()
    public List<AgendaServico> findAll(){
        return agendaServicoService.getAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public AgendaServico createAgendaServico(@RequestBody AgendaServico agendaServico){
        return agendaServicoService.createAgendaServico(agendaServico);
    }
    @GetMapping("/{id}")
    public AgendaServico findAllById(@PathVariable Long id){
        return agendaServicoService.findById(id);
    }

    @GetMapping("/usuario/{id}")
    public List<AgendaServico> findAllByUsuarioId(@PathVariable Long id){
        return agendaServicoService.findByUsuarioId(id);
    }

    @GetMapping("/prestador/{id}")
    public List<AgendaServico> findAllByPrestadorId(@PathVariable Long id){
        return agendaServicoService.findByPrestadorId(id);
    }


    @PutMapping("/{id}/{seConcluido}")
    public AgendaServico updateSeConcluido(@PathVariable Long id, @PathVariable Boolean seConcluido){
        return agendaServicoService.updateSePrestador(id, seConcluido);
    }
}
