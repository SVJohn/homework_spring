/**
 * Created by John on 03.04.16.
 */

function Api () {
    this.pathApi = "/api";
    this.pathSetData = this.pathApi + "/setdata";
}

Api.prototype.setDataElement = function (text) {
    var data = {
        "data": text
    };
    $.ajax({
        url: this.pathSetData,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
           mimiType: 'application/json',
        data: $.toJSON(data),
        success: function (res) {
            this.listenerResponse(res);
        }
    });
};


Api.prototype.getDataElements = function () {

};


Api.prototype.deleteDataElement = function (id) {

};
Api.prototype.listenerResponse = function (res) {
    alert (res);
};