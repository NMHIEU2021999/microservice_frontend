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
    $("#user-message").html('<div class="alert alert-noti alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> Error saving the address. ' + "hello world"+ '</div>');
    debugger
    console.log("abcd")
  });