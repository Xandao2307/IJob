package ijob.api.controller.dto;

import java.util.Date;
import java.util.List;

import ijob.api.model.UserModel;

public class UserDTO {
	private Long Id;
	private String Name;
	private String CPF;
	private Date Birthdate;
	private String Username;
	private String Password;
	private Boolean Independent;
	private String Description;
	private List<ImageDTO> Imagens;
	private List<ServicoDTO> Servicos;

	public UserDTO() {
	}

	public UserDTO(UserModel u) {
		setId(u.getId());
		setName(u.getName());
		setUsername(u.getUsername());
		setCPF(u.getCPF());
		setBirthdate(u.getBirthdate());
		setIndependent(u.getIndependent());
		setDescription(u.getDescription());
	}

	public static UserDTO converter(UserModel u) {
		UserDTO user = new UserDTO();

		user.setId(u.getId());
		user.setName(u.getName());
		user.setUsername(u.getUsername());
		user.setCPF(u.getCPF());
		user.setBirthdate(u.getBirthdate());
		user.setIndependent(u.getIndependent());
		user.setDescription(u.getDescription());

		return user;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getCPF() {
		return CPF;
	}

	public void setCPF(String cPF) {
		CPF = cPF;
	}

	public Date getBirthdate() {
		return Birthdate;
	}

	public void setBirthdate(Date birthDate) {
		Birthdate = birthDate;
	}

	public String getUsername() {
		return Username;
	}

	public void setUsername(String username) {
		this.Username = username;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public Boolean getIndependent() {
		return Independent;
	}

	public void setIndependent(Boolean isIndependent) {
		this.Independent = isIndependent;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public List<ImageDTO> getImagens() {
		return Imagens;
	}

	public void setImagens(List<ImageDTO> list) {
		Imagens = list;
	}
	
	public List<ServicoDTO> getServicos() {
		return Servicos;
	}

	public void setServicos(List<ServicoDTO> list) {
		Servicos = list;
	}
}
