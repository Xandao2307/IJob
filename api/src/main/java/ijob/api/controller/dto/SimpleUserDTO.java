package ijob.api.controller.dto;

import java.util.Date;
import java.util.List;

import ijob.api.model.Servico;

public class SimpleUserDTO {
	private Long Id;
	private String name;
	private String CPF;
	private Date birthdate;
	private String username;
	private String password;
	private Boolean independent;
	private String description;
	private List<ServicoDTO> servicos;

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCPF() {
		return CPF;
	}

	public void setCPF(String cPF) {
		CPF = cPF;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthDate) {
		this.birthdate = birthDate;
	}

	public String getUsername() {
		return username;
	}

	public void setEmail(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getIndependent() {
		return independent;
	}

	public void setIsIndependent(Boolean is_independent) {
		this.independent = is_independent;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<ServicoDTO> getServicos() {
		return servicos;
	}

	public void setServicos(List<ServicoDTO> servicos) {
		this.servicos = servicos;
	}

}
