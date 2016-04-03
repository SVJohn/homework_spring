package Homework.repository;

import Homework.model.Data;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by John on 01.04.16.
 */

public interface DataRepository extends JpaRepository<Data, Long> {

}
