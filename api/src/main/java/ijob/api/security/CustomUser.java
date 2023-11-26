package ijob.api.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import ijob.api.model.UserModel;

public class CustomUser implements UserDetails {


	private static final long serialVersionUID = 4341404618629046851L;
	
	private final Long id;
	private final String name;
	private final String username;
	private final String password;
	private final String CPF;
	private final Date birthdate;
	private final Boolean independent;
	private final String description;
	private String token;

	
	public CustomUser(UserModel user) {
		this.id = user.getId();
		this.name = user.getName();
		this.username = user.getUsername();
		this.password = user.getPassword();
		this.CPF = user.getCPF();
		this.birthdate = user.getBirthdate();
		this.independent = user.getIndependent();
		this.description = user.getDescription();
	}
	


	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getUsername() {
		return username;
	}

	public String getCPF() {
		return CPF;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public Boolean getIndependent() {
		return independent;
	}

	public String getDescription() {
		return description;
	}
	
	public String getPassword() {
		return password;
	}
	
	public String getToken() {
		return token;
	}
	
	public void setToken(String token) {
		this.token = token;
	}


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return new ArrayList<>();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}


	@Override
	public boolean isAccountNonLocked() {
		return true;
	}


	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}


	@Override
	public boolean isEnabled() {
		return true;
	}

}