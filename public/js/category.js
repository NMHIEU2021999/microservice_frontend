openAddForm = () => {
    $('#modalAddForm').modal('show');
}

closeAddForm = () => {
    $('#modalAddForm').modal('hide');
    $('#add-product').trigger("reset");
    $("#img1").hide();
    $("#img2").hide();
}

submitAddForm = (e) => {
    e.preventDefault();
    debugger
    console.log("abcd")
}

let addTimeout;

$('#add-product').on('submit', function (e) {
    e.preventDefault();
    let data = {};
    data.name = $("#add-name").val();
    data.price = $("#add-price").val();
    data.count = $("#add-count").val();
    data.description = $("#add-description").val();
    data.images = [];
    data.images.push($("#img1").attr("src").split('base64,')[1]);
    data.images.push($("#img2").attr("src").split('base64,')[1]);
    let tags = [];
    $('.add_checkbox input:checked').each(function () {
        tags.push($(this).attr('name'));
    });

    $.ajax({
        url: "catalogue",
        type: "POST",
        xhrFields: {
            withCredentials: true
        },
        async: true,
        data: JSON.stringify(data),
        success: function (data, textStatus, jqXHR) {
            addTimeout.clearTimeOut();
            $('#alertContent').html("A new product has been added successfully!");
            closeAddForm();
            $('.alert').alert();
            addTimeout= setTimeout(()=>{
                $('.alert').alert('close');
            }, 2500);
            // location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
            console.log('error: ' + JSON.stringify(jqXHR));
            console.log('error: ' + textStatus);
            console.log('error: ' + errorThrown);
        },
    });
});

////////////////////////////////////
openEditForm = () => {
    $('#modalEditForm').modal('show');
}

closeEditForm = () => {
    $('#modalEditForm').modal('hide');
    $("#img3").hide();
    $("#img4").hide();
}

$('#edit-product').on('submit', function (e) {
    e.preventDefault();
   
});