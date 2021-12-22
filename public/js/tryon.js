openTryOn = () => {
    $('#modalTryOn').modal('show');
}

closeTryOn = () => {
    $('#modalTryOn').modal('hide');
    $('#tryOnForm').trigger("reset");
    $("#img1").hide();
    $("#img2").hide();
}

$('#try-on-button').on('click',()=>{
    openTryOn()
})

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

$('#tryOnForm').on('submit', function (e) {
    e.preventDefault();
    let data = {
        per_img: $("#img1").attr("src").split('base64,')[1],
        clo_img: getBase64Image(document.getElementById("imageMain")),
    };
    console.log(data);

    let url = "https://f14d-35-225-175-226.ngrok.io/api"
    $.ajax({
        url: url,
        type: "POST",
        async: true,
        data: JSON.stringify(data),
        success: function (data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
            console.log('error: ' + JSON.stringify(jqXHR));
            console.log('error: ' + textStatus);
            console.log('error: ' + errorThrown);
        },
    });
});