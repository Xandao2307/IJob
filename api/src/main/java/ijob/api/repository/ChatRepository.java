package ijob.api.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ijob.api.model.ChatModel;

@Repository
public interface ChatRepository extends JpaRepository<ChatModel, Long> {

	@Query("select c from ChatModel c" 
			+ " where c.clientId = :sendUserId and" 
			+ " c.independentId = :receiveUserId"
			+ " or c.clientId = :receiveUserId"
			+ " and c.independentId = :sendUserId")
	ChatModel findExistChat(@Param("sendUserId") Long sendUserId
			, @Param("receiveUserId") Long receiveUserId);
}
