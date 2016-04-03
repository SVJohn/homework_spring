
function UI () {
    var _self = this;

    this.serverApi = new Api ();

    this.butonPanel = $('#buttonsPanel');
    this.textField = $('#editable_text');
    this.listData = $('#listData');

    this.serverApi.getDataElements( this.setAllInListData() );

    $('#bAdd').on ('click', function () {
        _self.listenerAddItem ();
    });

    this.listData.on ('click', 'option', function () {
        _self.listenerSelectItem ();
    });

    this.textField.on ('click', function () {

    });

    $('#bDel').on ('click', function () {
        _self.listenerDeleteItem();
    });
    $('#bSave').on ('click', function () {
        _self.listenerSaveChanges();
    });

    $('#bUp').on ('click', function () {
        _self.listenerMoveUpItem();
    });
    $('#bDown').on ('click', function () {
        _self.listenerMoveDownItem();
    });
}

UI.prototype.listenerSelectItem = function () {
    this.butonPanel.css("display", "flex");
    var selected = $('#listData :selected').val ();
    this.textField.val(selected);
};

UI.prototype.listenerAddItem = function () {
    var $newText = this.textField.val();
    if ($newText !='') {
        this.listData.append( $('<option>'+$newText+'</option>') );
        this.serverApi.setDataElement($newText);
        this.returnToStartView();
    }
};

UI.prototype.listenerDeleteItem = function () {
    $('#listData :selected').remove();
    this.returnToStartView();
};

UI.prototype.listenerSaveChanges = function () {
    if (this.listData.val()) {
        $('#listData option:selected').text(this.textField.val());
    }
    this.returnToStartView();
};

UI.prototype.listenerMoveUpItem = function () {
    // console.log($('#data option:selected').index());
    var selectedElement = $('#listData option:selected');
    var indexSelectedElement = selectedElement.index()+1;
    var htmlSelectedElement = '<option>'+selectedElement.text() +'</option>';
    var indexUpElement = indexSelectedElement-1;

    if (indexSelectedElement >1 ) {
        $('#listData option:nth-child('+indexUpElement+')').before(htmlSelectedElement);

        $('#listData :selected').remove();

        return;
    }
    this.returnToStartView();
};

UI.prototype.listenerMoveDownItem = function () {
    var selectedElement = $('#listData option:selected');
    var indexSelectedElement = selectedElement.index()+1;
    var htmlSelectedElement = '<option>'+selectedElement.text() +'</option>';
    var indexDownElement = indexSelectedElement+1;

    if (indexSelectedElement !=  $('select[id=listData] option').size() &&
                                                        indexSelectedElement >0 ) {

        $('#listData option:nth-child('+indexDownElement+')').after(htmlSelectedElement);

        $('#listData :selected').remove();

        return;
    }
    this.returnToStartView();
};

UI.prototype.returnToStartView = function () {
    this.butonPanel.hide ("show");

    $('#listData option:selected').each ( function () {
       this.selected = false;
    });

    this.textField.val ('');
};

//callback function
UI.prototype.setAllInListData = function (res) {
    alert(res);
};

window.onload = function () {
      new UI ();
};

