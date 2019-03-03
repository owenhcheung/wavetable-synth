var values = {}

const osc1Canvas = document.getElementById("osc1_canvas")
const osc2Canvas = document.getElementById("osc2_canvas")
osc2Canvas.addEventListener("click", function (evt) {
    var mousePos = getMousePos(osc2Canvas, evt);
    alert(mousePos.x + ',' + mousePos.y);
}, false);
osc1Canvas.width = 530;
osc1Canvas.height = 256;
const canvasWidth = osc1Canvas.width
const canvasHeight = osc1Canvas.height
console.log(canvasWidth);
console.log(canvasHeight);
for (var i = 0; i < canvasWidth; i++) {
    values[i] = 0
}

function draw(canvas) {
    var context = canvas.getContext('2d')

    // context.globalCompositeOperation = canvas
    context.clearRect(0, 0, context.width, context.height)

    for (var x = 0; x < canvasWidth; x++) {
        context.beginPath();
        context.fillStyle = "#001356"
        context.arc(x, values[x] /*+ (canvasHeight / 2)*/ , 1, 0, 2 * Math.PI);
        context.stroke()
    }
}


$(document).ready(() => {
    draw(osc1Canvas)
    draw(osc2Canvas)
})

$('#osc1_canvas').mousemove(event => {
    if (event.button != 0) return
    const mousePos = getMousePos(document.getElementById("osc1_canvas"), event)
    values[mousePos.x] = mousePos.y

    draw(document.getElementById("osc1_canvas"))
})

// function init() {
//     var ctx = document.getElementById("osc1_canvas").getContext('2d');
//     for (var i = 0; i < ctx.width; i++) {

//         ctx.fillStyle = "#001356";
//         ctx.fillRect(i, ctx.height / 2, 1, 1);

//     }
//     ctx = document.getElementById("osc2_canvas").getContext('2d');
//     for (var b = 0; i < ctx.width; i++) {
//         ctx.fillStyle = "#001356";
//         ctx.fillRect(i, ctx.height / 2, 1, 1);

//     }

// }


function getMousePos(canvas, evt) {
    // return {
    //     x: evt.clientX - (canvas.offsetLeft - window.pageXOffset),
    //     y: evt.clientY - (canvas.offsetTop - window.pageYOffset)
    // }

    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

// function handleMouseMove(canvas, event) {
//     if (event.button != 0) return

//     var mousePos = getMousePos(canvas, event)
//     draw(canvas, mousePos)
// }

// // const osc1Canvas = document.getElementById("osc1_canvas")
// osc1Canvas.addEventListener("onmousemove", function (evt) {
//     handleMouseMove(osc1Canvas, evt)
// }, false);

// // const osc2Canvas = document.getElementById("osc2_canvas")
// osc2Canvas.addEventListener("onmousemove", function (evt) {
//     handleMouseMove(osc2Canvas, evt)
// }, false);