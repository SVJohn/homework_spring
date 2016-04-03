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
    List<Data> getAll();
}
