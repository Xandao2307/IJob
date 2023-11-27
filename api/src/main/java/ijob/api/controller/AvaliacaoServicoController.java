package ijob.api.controller;

import ijob.api.model.AvaliacaoServico;
import ijob.api.repository.AvaliacaoServicoRepository;
import ijob.api.service.AvaliacaoServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/avaliacao")
public class AvaliacaoServicoController {
    @Autowired
    private AvaliacaoServicoService avaliacaoServicoService;

    @GetMapping
    public List<AvaliacaoServico> findAll(){
        return avaliacaoServicoService.findAll();
    }
    @PostMapping
    public AvaliacaoServico createAvaliacaoServico(@RequestBody AvaliacaoServico avaliacaoServico){
        return avaliacaoServicoService.createAvaliacaoServico(avaliacaoServico);
    }

    @GetMapping("/{id}")
    public AvaliacaoServico findById(@PathVariable Long id){
        return avaliacaoServicoService.findById(id);
    }

    @GetMapping("prestador/{id}")
    public List<AvaliacaoServico> findByPrestadorId(@PathVariable Long id){
        return avaliacaoServicoService.findByAgendaPrestadorId(id);
    }
}
