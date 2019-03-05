// The amount of segment points we want to create:
var amount = 500;

// The maximum height of the wave:
var height = 100;

// Create a new path and style it:
var path = new Path({
    // 80% black:
    strokeColor: [0.8],
    strokeWidth: 10,
    strokeCap: 'round'
});
var a;
a = (view.size.width / (amount + 1)) / 2
// Add 5 segment points to the path spread out
// over the width of the view:
for (var i = 0; i <= amount; i++) {
    path.add(new Point(i / amount, 1) * view.size);
}
for (var i = 0; i <= amount; i++) {
    var segment = path.segments[i];

    // A cylic value between -1 and 1
    //var sinus = Math.sin(event.time * 3 + i);

    // Change the y position of the segment point:
    segment.point.y = height;
}

// Select the path, so we can see how it is constructed:
path.selected = true;

function init(event) {

}

function pathToMouse(event) {
    for (var i = 0; i <= amount; i++) {
        var segment = path.segments[i];

        // A cylic value between -1 and 1
        //var sinus = Math.sin(event.time * 3 + i);

        if (Math.abs(segment.point.x - event.point.x) <= a) {
            // Change the y position of the segment point:\
            segment.point.y = event.point.y;
        }

    }

}

function onFrame(event) {
    // Loop through the segments of the path:
    for (var i = 0; i <= amount; i++) {
        var segment = path.segments[i];

        // A cylic value between -1 and 1
        //var sinus = Math.sin(event.time * 3 + i);

        // Change the y position of the segment point:
        //segment.point.y = height;
    }
    // Uncomment the following line and run the script again
    // to smooth the path:
    //path.smooth();
}

function onMouseDown(event) {

    pathToMouse(event)


}

function onMouseDrag(event) {
    pathToMouse(event)


}

function onResize(event) {

}