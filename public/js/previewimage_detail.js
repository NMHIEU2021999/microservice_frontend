function readURL(input, output) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $(output).attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]); // convert to base64 string
      $(output).show();
    }else{
      $(output).hide();
    }
  }
  
$("#image1").change(function() {
    readURL(this, '#img1');
});


