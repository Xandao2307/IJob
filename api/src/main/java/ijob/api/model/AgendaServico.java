package ijob.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "AgendaServico")
public class AgendaServico {

    @jakarta.persistence.Id
    @jakarta.persistence.GeneratedValue(strategy = jakarta.persistence.GenerationType.SEQUENCE, generator = "1")
    private Long id;
    @Column(nullable = false)
    private Long prestadorId;
    @Column(nullable = false)
    private Long usuarioId;
    private Date dtInicio;
    private Boolean seConcluido;

    public AgendaServico() {
    }

    public AgendaServico(Long prestadorId, Long usuarioId, Date dtInicio, boolean seConcluido) {
        this.prestadorId = prestadorId;
        this.usuarioId = usuarioId;
        this.dtInicio = dtInicio;
        this.seConcluido = seConcluido;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPrestadorId() {
        return prestadorId;
    }

    public void setPrestadorId(Long prestadorId) {
        this.prestadorId = prestadorId;
    }

    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Date getDtInicio() {
        return dtInicio;
    }

    public void setDtInicio(Date dtInicio) {
        this.dtInicio = dtInicio;
    }

    public boolean isSeConcluido() {
        return seConcluido;
    }

    public void setSeConcluido(boolean seConcluido) {
        this.seConcluido = seConcluido;
    }
}
