package Homework.services;

import Homework.model.Data;

import java.util.List;

/**
 * Created by John on 01.04.16.
 */
public interface DataService {
    Data addData (Data data);

    void delete(long id);

    Data editData(Data data);

    List <Data> getAll();
    List <Data> getSortingAll();

//    void swap (Long id1, Long id2);
    void swap (List <Data> data);
}
