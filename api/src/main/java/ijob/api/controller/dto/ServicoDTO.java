package ijob.api.controller.dto;

import ijob.api.model.Servico;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

public class ServicoDTO {
	private Long id;
	private Long clientId;
	private String name;
	private String codigo;
	
	public  ServicoDTO () {}
	
	public  ServicoDTO (String name, String codigo, Long clientId) {
		this.clientId = clientId;
		this.codigo = codigo;
		this.name = name;
	}
	
	public static ServicoDTO converter(Servico s) {
		ServicoDTO servico =  new ServicoDTO();
		
		servico.setName(s.getName());
		servico.setCodigo(s.getCodigo());

		return servico;
	}
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getClientId() {
		return clientId;
	}
	public void setClientId(Long clientId) {
		this.clientId = clientId;
	}
	public String getName() {
		return name;
	}
	public void setName(String _name) {
		this.name = _name;
	}
	
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String _cdg) {
		this.codigo = _cdg;
	}
}
