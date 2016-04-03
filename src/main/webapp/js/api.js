/**
 * Created by John on 03.04.16.
 */

function Api () {
    this.PATH_API = "/api";
    this.PATH_SET_DATA = this.PATH_API + "/setdata";
    this.PATH_GET_ALL_DATA = this.PATH_API +"/getAll";

    $.ajaxSetup({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        mimiType: 'application/json',
    });
}

Api.prototype.setDataElement = function (text) {
    var data = {
        "data": text
    };
    $.ajax({
        url: this.PATH_SET_DATA,

        data: $.toJSON(data),
        success: function (res) {
            this.listenerResponse(res);
        }
    });
};


Api.prototype.getDataElements = function ( callback ) {
    $.ajax ({
        url: this.PATH_GET_ALL_DATA,
        success: function (res) {
            callback (res);
        }
    });
};

Api.prototype.deleteDataElement = function (id) {

};
Api.prototype.listenerResponse = function (res) {
    alert (res);
};