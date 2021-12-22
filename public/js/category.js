
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
        async: false,
        data: JSON.stringify(data),
        success: function (data, textStatus, jqXHR) {
            let obj = {};
            obj.catalogId = data.id;
            obj.tagId = tags;
            $.ajax({
                url: "tag-catalogue",
                type: "POST",
                xhrFields: {
                    withCredentials: true
                },
                async: false,
                data: JSON.stringify(obj),
                success: function (res, textStatus, jqXHR) {
                    if (addTimeout) {
                        addTimeout.clearTimeout();
                    }
                    closeAddForm();
                    $("#user-message").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + "A new product has been added successfully!" + '</div>');
                    setTimeout(() => {
                        $("#user-message").html('');
                    }, 8000);
                    reloadProducts();
                }, error: function (jqXHR, textStatus, errorThrown) {
                    alert(errorThrown);
                    console.log('error: ' + JSON.stringify(jqXHR));
                    console.log('error: ' + textStatus);
                    console.log('error: ' + errorThrown);
                },
            });
           

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
openEditForm = (id) => {
    // console.log(id);
    $("#edit-id").val(id);
    $('#modalEditForm').modal('show');

    $.ajax({
        url: '/catalogue/'+id,
        type: "GET",
        async: false,
        success: function (res, textStatus, jqXHR) {
            data = JSON.parse(res);
            // console.log(data);
            $("#edit-name").val(data.name);
            $("#edit-price").val(data.price);
            $("#edit-count").val(data.count);
            $("#edit-description").val(data.description);
            $("#img3").attr("src", data.imageUrl[0]);
            $("#img3").attr("oldSrc", data.imageUrl[0]);
            $("#img4").attr("src", data.imageUrl[1]);
            $("#img4").attr("oldSrc", data.imageUrl[1]);
            $("#img3").show();
            $('#img4').show();

            $('.edit_checkbox input').each(function () {
                let tagName = $(this).attr('tagname');
                if(data.tag.indexOf(tagName) != -1){
                    $(this).attr('checked', true);
                }else{
                    $(this).attr('checked', false);
                }
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
            console.log('error: ' + JSON.stringify(jqXHR));
            console.log('error: ' + textStatus);
            console.log('error: ' + errorThrown);
        },
    });
}

closeEditForm = () => {
    $('#modalEditForm').modal('hide');
    $("#img3").hide();
    $("#img4").hide();
}

$('#edit-product').on('submit', function (e) {
    e.preventDefault();
    let data = {};
    data.name = $("#edit-name").val();
    data.price = $("#edit-price").val();
    data.count = $("#edit-count").val();
    data.description = $("#edit-description").val();
    data.images = [];
    if($("#img3").attr("src") && ($("#img3").attr("src") != $("#img3").attr("oldSrc"))){
        data.images.push($("#img3").attr("src").split('base64,')[1]);
    }else{
        data.images.push("");
    }

    if($("#img4").attr("src") && ($("#img4").attr("src") != $("#img4").attr("oldSrc"))){
        data.images.push($("#img4").attr("src").split('base64,')[1]);
    }else{
        data.images.push("");
    }

    let tags = [];
    $('.edit_checkbox input:checked').each(function () {
        tags.push($(this).attr('tagname'));
    });

    console.log(data);
    console.log(tags);
});


openDeleteForm = (id) => {
    $('#modalDeleteForm').modal('show');
    $("#delete-id").val(id);
    console.log(id);
}

closeDeleteForm = () => {
    $('#modalDeleteForm').modal('hide');
}

$('#delete-product').on('submit', function (e) {
    e.preventDefault();

  
});
