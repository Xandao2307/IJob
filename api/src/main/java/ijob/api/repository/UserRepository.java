package ijob.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ijob.api.controller.dto.UserDTO;
import ijob.api.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {

	UserModel findByUsername(String username);

	@Query("select u from UserModel u  where independent = 1")
	List<UserModel> findIndependent();
	

	 @Query("SELECT u FROM UserModel u " +
             "JOIN Servico serv ON serv.clientId = u.id " +
             "WHERE serv.codigo = :code")
	List<UserModel> findByServico(@Param("code") String code);
}
