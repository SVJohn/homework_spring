package Homework.controllers;

import Homework.model.Data;
import Homework.services.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    public List<Data> getAllData() {                   //(String search) {
        return dataService.getAll();

    }

    @RequestMapping(value = "/setdata", method = RequestMethod.POST)
    @ResponseBody
    public Data setData(@RequestBody Data data) {
        return dataService.addData(data);
    }

    @RequestMapping(value = "/editdata", method = RequestMethod.POST)
    public String editData  (@RequestBody Data data) {
        dataService.editData(data);
        return "edit";
    }

    @RequestMapping(value = "/delete{id}", method = RequestMethod.GET)
    //@RequestMapping(value = "/delete{id}", method = RequestMethod.DELETE)
    //@ResponseBody
    public String deleteData(@RequestParam (value="id", required = true) Long id) {          //@PathVariable("id") Long id)
        // System.out.println (id);
        dataService.delete(id);
        return "delete";
    }

    @RequestMapping(value = "/swap", method = RequestMethod.POST)
    public String swapData (@RequestBody List <Data> data) {

        dataService.swap (data);
        return "swap";
    }

}
