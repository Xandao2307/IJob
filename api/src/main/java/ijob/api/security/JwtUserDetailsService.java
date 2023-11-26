package ijob.api.security;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import ijob.api.model.UserModel;
import ijob.api.repository.UserRepository;


@Service
public class JwtUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public JwtUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public CustomUser loadUserByUsername(String userName) {
        UserModel user = userRepository.findByUsername(userName);
        
        if(user == null) {
        	new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", userName));
        }
      
  
        return new CustomUser(user);
    }

}