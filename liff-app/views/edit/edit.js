let canvas;
let ctx;

window.onload = () => {
    init();
};

function init() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
}

function draw() {
    ctx.clearRect(0,0,5000,5000);
    let input = document.getElementById("text");
    ctx.font = "Bold 60px Arial";
    ctx.fillStyle = '#FF0000';
    ctx.textAlign = "left";
    ctx.fillText(getImage(), 10, 100); 
    // ctx.fillText(input.value, 10, 100); 
}

function getImage() {
    $.ajax({
        url: "http://212.64.7.87:5757/wecmodel/",
        type: "get",
        dataType: "json", //指定服务器返回的数据类型
        success: function (data) {
            console.log(data);
        }
    });
}

function print() {
    let imgData=ctx.getImageData(0,0,150,150);
    console.log(imgData.data.toString());
}
