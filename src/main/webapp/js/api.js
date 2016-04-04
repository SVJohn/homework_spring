/**
 * Created by John on 03.04.16.
 */

function Api () {

    var _self = this;

    URI_API = "/api";

    URI_SET_DATA = URI_API + "/setdata";
    URI_EDIT_DATA = URI_API + "/editdata";
    URI_DELETE_DATA = URI_API+ "/delete";
    URI_SWAP_DATA = URI_API +"/swap";

    URI_GET_ALL_DATA = URI_API +"/getAll";

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
        url: URI_SET_DATA,

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
        url: URI_GET_ALL_DATA,
        success: function (res) {
            listener (res, callback);

        }
    });
};

Api.prototype.deleteDataElement = function (id) {

    var data = "id="+id;
    
    $.ajax ({
        //type: 'DELETE',
        type: 'GET',
        url: URI_DELETE_DATA,
        data: data,
        success: function (res) {
            console.log (['item id = '+id, res]);
        }
    });
};

Api.prototype.editDataElement = function (data) {
    Api.sendJsonPost(URI_EDIT_DATA, data, null);
};

Api.prototype.listenerResponse = function (res, callback) {

    //console.log ([typeof res, res]);
    if (null == res && undefined === res ) return;

    if (typeof res[0] == "object") {

        for (var i in res) {

            callback(res[i].id, res[i].data);

        }
    } else {
        callback (res.id, res.data);
    }

};

Api.swapDataElements = function (data) {
    //console.log ($.toJSON(data));
    Api.sendJsonPost(URI_SWAP_DATA, data, null);
};

Api.sendJsonPost  = function (URI, data, callback) {
    $.ajax ({
        type: 'POST',
        url: URI,
        data: $.toJSON(data),
        success: function (res) {
            if (null != callback ) {
                callback (res);
            } else {
                console.log (res);
            }
        }
    });
};
