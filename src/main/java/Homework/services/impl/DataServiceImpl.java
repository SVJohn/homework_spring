package Homework.services.impl;

import Homework.model.Data;
import Homework.repository.DataRepository;
import Homework.services.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by John on 01.04.16.
 */
@Service
public class DataServiceImpl implements DataService{

    @Autowired
    private DataRepository dataRepository;

    @Transactional
    @Override
    public Data addData(Data data) {
        Data savedData = dataRepository.saveAndFlush(data);

        return savedData;
    }

    @Transactional
    @Override
    public void delete(long id) {
        dataRepository.delete(id);
    }

    @Transactional
    @Override
    public Data editData(Data data) {
        return dataRepository.saveAndFlush(data);
    }

    @Transactional
    @Override
    public List<Data> getAll() {
        return dataRepository.findAll();
    }
}
