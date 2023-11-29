package ijob.api.model;

import java.util.Date;

import ijob.api.controller.dto.SimpleUserDTO;
import ijob.api.controller.dto.UserDTO;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class UserModel {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long Id;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private String CPF;

	@Column(nullable = true)
	private Date birthdate;

	@Column(nullable = false)
	private String username;

	@Column(nullable = false)
	private String password;

	@Column(nullable = false)
	private Boolean independent;

	@Column(nullable = true)
	private String description;

	public UserModel() {
	}

	public UserModel(SimpleUserDTO _user) {
		this.name = _user.getName();
		this.username = _user.getUsername();
		this.password = _user.getPassword();
		this.CPF = _user.getCPF();
		this.independent = _user.getIndependent();
		this.birthdate = _user.getBirthdate();
		this.description = _user.getDescription();
	}

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
}
