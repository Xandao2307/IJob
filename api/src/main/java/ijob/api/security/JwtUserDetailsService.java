package ijob.api.security;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import ijob.api.model.UserModel;
import ijob.api.repository.UserRepository;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public JwtUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String userName) {
        UserModel user = userRepository.findByUsername(userName);
        
//        if(!user.getId()) {
//        	new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", email))
//        }
//      
        return new User(user.getName(), user.getPassword(), new ArrayList<>());
    }

}