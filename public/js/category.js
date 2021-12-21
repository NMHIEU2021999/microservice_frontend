openAddForm = () => {
    $('#modalAddForm').modal('show');
}

closeAddForm = ()=>{
    $('#modalAddForm').modal('hide');
    $('#add-product').trigger("reset");
    $("#image1").attr('src', "");
    $("#image2").attr('src', "");
}

submitAddForm = (e)=>{
    e.preventDefault();
    debugger
    console.log("abcd")
}

$('#add-product').on('submit', function(e){
    e.preventDefault();
    debugger
    console.log("abcd")
  });