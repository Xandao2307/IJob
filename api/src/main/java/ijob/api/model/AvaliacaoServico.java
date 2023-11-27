package ijob.api.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Avaliacao")
public class AvaliacaoServico {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "1")
    private Long id;
    @Column(nullable = false)
    private Double nota;
    @Column(nullable = false)
    private String comentario;
    private Date dtAvaliacao;

    @ManyToOne
    @JoinColumn(name = "agenda_servico_id", nullable = false)
    private AgendaServico agendaServico;

    public AvaliacaoServico() {
    }

    public AvaliacaoServico(Double nota, String comentario, Date dtAvaliacao, AgendaServico agendaServico) {
        this.nota = nota;
        this.comentario = comentario;
        this.dtAvaliacao = dtAvaliacao;
        this.agendaServico = agendaServico;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getNota() {
        return nota;
    }

    public void setNota(Double nota) {
        this.nota = nota;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Date getDtAvaliacao() {
        return dtAvaliacao;
    }

    public void setDtAvaliacao(Date dtAvaliacao) {
        this.dtAvaliacao = dtAvaliacao;
    }

    public AgendaServico getAgendaServico() {
        return agendaServico;
    }

    public void setAgendaServico(AgendaServico agendaServico) {
        this.agendaServico = agendaServico;
    }
}
