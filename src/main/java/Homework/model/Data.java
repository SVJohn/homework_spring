package Homework.model;

import javax.persistence.*;


/**
 * Created by John on 01.04.16.
 */
@Entity
@Table (name = "data")

public class Data {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column (name = "data", nullable = false)
    private String data;

//    @Column (name = "sorting")
//    @GeneratedValue
//    private long sorting;

    public Data() {    }

    public Data(String data) {
        this.data = data;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

//    public long getSorting () {
//        return this.sorting;
//    }
//    public void setSorting (Long sorting) {
//        this.sorting = sorting;
//    }


}
