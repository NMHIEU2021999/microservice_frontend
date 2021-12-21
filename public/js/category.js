openAddForm = () => {
    $('#modalAddForm').modal('show');
}

closeAddForm = ()=>{
    $('#modalAddForm').modal('hide');
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