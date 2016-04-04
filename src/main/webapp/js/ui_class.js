
function UI () {
    var _self = this;

    this.actions = null;

    this.serverApi = new Api ();

    this.butonPanel = $('#buttonsPanel');
    this.textField = $('#editable_text');
    this.listData = $('#listData');
    this.bDel = $('#bDel');

    this.serverApi.getDataElements( this.setInEndListData );

    $('#bAdd').on ('click', function () {
        _self.listenerAddItem ();
    });

    this.listData.on ('click', 'option', function () {
        _self.listenerSelectItem ();
    });

    this.textField.on ('click', function () {

    });

    this.bDel.on ('click', function () {
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
    var selected = $('#listData :selected').text ();
    this.textField.val(selected);
};

UI.prototype.listenerAddItem = function () {
    var $newText = this.textField.val();
    if ($newText !='') {
        // this.setInEndListData(null, $newText);
        this.serverApi.setDataElement($newText, this.setInEndListData);
        this.returnToStartView();
    }
};

UI.prototype.listenerDeleteItem = function () {
    var item = $('#listData :selected');
    UI.deleteItem ( item );

    this.serverApi.deleteDataElement( item.val() );
    //this.textField.val ('');
    this.returnToStartView();

};

UI.prototype.listenerSaveChanges = function () {
    if (this.listData.val()) {
        var item = $('#listData option:selected');
        var newText = this.textField.val();
        item.text(newText);
        this.serverApi.editDataElement( item.val(), newText);
    }
    this.returnToStartView();
};

UI.prototype.listenerMoveUpItem = function () {
    // console.log($('#data option:selected').index());
    var selectedElement = $('#listData option:selected');
    var indexSelectedElement = selectedElement.index()+1;
    var htmlSelectedElement = UI.getOptionHtml (selectedElement.val(), selectedElement.text());
    var indexUpElement = indexSelectedElement-1;

    if (indexSelectedElement >1 ) {
        $('#listData option:nth-child('+indexUpElement+')').before(htmlSelectedElement);

        //this.bDel.trigger('click');
        UI.deleteItem ($('#listData :selected') );
        $('#listData option:nth-child('+indexUpElement+')').attr ("selected", "selected");
        return;
    }
    //
    //console.log ($('#listData option:nth-child('+indexUpElement+')').val(), "nuhj" );
    this.returnToStartView();
};

UI.prototype.listenerMoveDownItem = function () {
    var selectedElement = $('#listData option:selected');
    var indexSelectedElement = selectedElement.index()+1;
    var htmlSelectedElement = UI.getOptionHtml (selectedElement.val(), selectedElement.text());
    var indexDownElement = indexSelectedElement+1;

    if (indexSelectedElement !=  $('select[id=listData] option').size() &&
                                                        indexSelectedElement >0 ) {

        $('#listData option:nth-child('+indexDownElement+')').after(htmlSelectedElement);

        //this.bDel.trigger('click');
        UI.deleteItem ($('#listData :selected') );

        $('#listData option:nth-child('+indexDownElement+')').attr ("selected", "selected");
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
UI.prototype.setInEndListData = function (key, val) {
    //console.log ([key, val]);
    $('#listData').append( UI.getOptionHtml (key, val) );
};

UI.getOptionHtml = function (key, val) {
    if (undefined !== key && undefined !== val ) {
        return $('<option value = ' + key + '>' + val + '</option>');
    }
};

UI.deleteItem = function (item) {
    item.remove();
};


window.onload = function () {
      new UI ();
};

