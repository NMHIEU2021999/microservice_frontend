openAddForm = () => {
    $('#modalAddForm').modal('show');
}

closeAddForm = ()=>{
    $('#modalAddForm').modal('hide');
}

submitAddForm = (e)=>{
    e.preventDefault();
    console.log("abcd")
}