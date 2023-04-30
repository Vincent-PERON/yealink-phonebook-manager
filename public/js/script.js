var deleteWholePosition = function (ev) {

    var decision = confirm('Are you sure?'),
        trToDelete = $(ev).parent()[0],
        aPos = oTable.fnGetPosition(trToDelete),
        idDeleted = $(ev).parent().parent().attr('id');

    if (decision) {
        $('#phoneBook_phoneRecords_' + idDeleted).remove();
        oTable.fnDeleteRow(aPos[0]);
        ajaxSubmitForm();
    }
}