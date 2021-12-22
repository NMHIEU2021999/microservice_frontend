function readURL(input, output) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(output).attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]); // convert to base64 string
    $(output).show();
  } else {
    $(output).hide();
  }
}
function readURL2(input, output) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $(output).attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }else{
    $(output).attr('src', $(output).attr('oldSrc'));
  }
}

$("#image1").change(function () {
  readURL(this, '#img1');
});
$("#image2").change(function () {
  readURL(this, '#img2');
});

$("#image3").change(function () {
  readURL2(this, '#img3');
});

$("#image4").change(function () {
  readURL2(this, '#img4');
});



