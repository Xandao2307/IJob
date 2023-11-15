package ijob.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ijob.api.controller.dto.MessageDTO;
import ijob.api.model.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {

	List<Message> findByChatId(Long i);

	void save(MessageDTO msg);
}
