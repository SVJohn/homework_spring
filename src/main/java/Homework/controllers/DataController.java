package Homework.controllers;

import Homework.model.Data;
import Homework.services.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


/**
 * Created by John on 01.04.16.
 */
@Controller
@RequestMapping("/api")
public class DataController {

    @Autowired
    private DataService dataService;

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    @ResponseBody
    public List<Data> getAllData () {                   //(String search) {
        return dataService.getAll();
    }

    @RequestMapping(value = "/setdata", method = RequestMethod.POST)
    @ResponseBody
    public Data setData(@RequestBody Data data) {
        return dataService.addData(data);
    }

    @RequestMapping(value = "{contextId}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteCar(@RequestBody Long contextId) {
        dataService.delete(contextId);
        return "delete";
    }


}
