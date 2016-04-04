package Homework.repository;

import Homework.model.Data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by John on 01.04.16.
 */

public interface DataRepository extends JpaRepository<Data, Long> {

//    @Query ("SELECT d FROM Data d ORDER BY d.sorting")
    @Query ("SELECT d FROM Data d ORDER BY d.id DESC")
        List <Data> getAllOrderByIdDesc();



}
