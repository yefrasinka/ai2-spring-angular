package pl.lab.person_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.lab.person_api.model.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
