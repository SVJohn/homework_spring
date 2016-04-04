/**
 * Created by John on 03.04.16.
 */

function Api () {

    var _self = this;

    this.PATH_API = "/api";
    this.PATH_SET_DATA = this.PATH_API + "/setdata";
    this.PATH_EDIT_DATA = this.PATH_API + "/editdata";
    this.PATH_DELETE_DATA = this.PATH_API+ "/delete";
    this.PATH_GET_ALL_DATA = this.PATH_API +"/getAll";

    $.ajaxSetup({

        dataType: 'json',
        contentType: 'application/json',
        mimiType: 'application/json'
    });
}

Api.prototype.setDataElement = function (text, callback) {
    var data = {
        "data": text
    };
    var listener = this.listenerResponse;
    $.ajax({
        type: 'POST',
        url: this.PATH_SET_DATA,

        data: $.toJSON(data),
        success: function (res) {
            listener (res, callback);
        }
    });
};

Api.prototype.getDataElements = function ( callback ) {
    var listener = this.listenerResponse;
    $.ajax ({
        type: 'GET',
        url: this.PATH_GET_ALL_DATA,
        success: function (res) {
            listener (res, callback);

        }
    });
};

Api.prototype.deleteDataElement = function (id) {
    // var data = {
    //     "id": id
    // };
    var data = "id="+id;
    
    $.ajax ({
        //type: 'DELETE',
        type: 'GET',
        url: this.PATH_DELETE_DATA,
        data: data,
        success: function (res) {
            console.log (['item id = '+id, res]);
        }
    });
};

Api.prototype.editDataElement = function (id, text) {
    var data = {
        "id": id,
        "data": text
    };
    $.ajax ({
        type: 'POST',
        url: this.PATH_EDIT_DATA,
        data: $.toJSON(data),
        success: function (res) {
            console.log (['item id = '+id, res]);
        }
    });
};

Api.prototype.listenerResponse = function (res, callback) {

    console.log ([typeof res, res]);
    if (null == res && undefined === res ) return;

    if (typeof res[0] == "object") {

        for (var i in res) {

            // console.log (res);
            callback(res[i].id, res[i].data);


        }
    } else {
        callback (res.id, res.data);
    }

};