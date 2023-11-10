package ijob.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ijob.api.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {

	UserModel findByUsername(String username);

}
