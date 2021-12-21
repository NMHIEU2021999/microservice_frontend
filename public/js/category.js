openAddForm = () => {
    $('#modalAddForm').modal('show');
}

closeAddForm = ()=>{
    $('#modalAddForm').modal('hide');
    $('#add-product').trigger("reset");
    $("#img1").hide();
    $("#img2").hide();
}

submitAddForm = (e)=>{
    e.preventDefault();
    debugger
    console.log("abcd")
}

$('#add-product').on('submit', function(e){
    e.preventDefault();
    let data = {};
    data.name = $("#add-name").val();
    data.price = $("#add-price").val();
    data.count = $("#add-count").val();
    data.description = $("#add-description").val();
    data.images = [];
    data.images.push($("#img1").attr("src").split('base64,')[1]);
    data.images.push($("#img2").attr("src").split('base64,')[1]);
    data.tag = [];
    $('.add_checkbox input:checked').each(function() {
        data.tag.push($(this).attr('name'));
    });
    console.log(data)
    // $.ajax({
    //     url: "addresses",
    //     type: "POST",
    //     async: false,
    //     data: JSON.stringify(data),
    //     success: function (data, textStatus, jqXHR) {
    //         location.reload();
    //     },
    //     error: function (jqXHR, textStatus, errorThrown) {
    //         $("#user-message").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> Error saving the address. ' + errorThrown + '</div>');
    //         console.log('error: ' + JSON.stringify(jqXHR));
    //         console.log('error: ' + textStatus);
    //         console.log('error: ' + errorThrown);
    //     },
    // });
    debugger
    console.log("abcd")
  });