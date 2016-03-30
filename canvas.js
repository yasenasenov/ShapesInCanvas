
function addListener(button,buttonDiv){
    document.getElementById(button).addEventListener('click',function(){
        var arr = document.getElementsByClassName("hidden");
        for(var i =0; i< arr.length;i++){
            arr[i].style.display = "none";
        }
        document.getElementById(buttonDiv).style.display = "block";
        document.getElementById("controllers").style.display = "block";

    });
}
addListener("newCircle","circle");
addListener("newRect","rect");
addListener("newTriangle","tri");
addListener("newSegment","seg");

function getShape(){
    var arr = [];
    arr.push(document.getElementById("x").value);
    arr.push(document.getElementById("y").value);
    arr.push(document.getElementById("color").value);
    document.getElementById("x").value = null;
    document.getElementById("y").value = null;
    return arr;
}

document.getElementById("addCircle").addEventListener('click',function(){
    var shape = getShape();
    var r = document.getElementById("radius").value;
    document.getElementById("radius").value = null;
    var circle = new Shapes.Circle(shape[0],shape[1],shape[2],r);
    circle.draw();
    circle.toString();
});

document.getElementById("addRect").addEventListener('click',function(){
    var shape = getShape();
    var sideA = document.getElementById("sideA").value;
    var sideB = document.getElementById("sideB").value;
    document.getElementById("sideA").value = null;
    document.getElementById("sideB").value = null;
    var rect = new Shapes.Rectangle(shape[0],shape[1],shape[2],sideA,sideB);
    rect.draw();
    rect.toString();
});

document.getElementById("addTri").addEventListener('click',function(){
    var shape = getShape();
    var x2 = document.getElementById("x2").value;
    var y2 = document.getElementById("y2").value;
    var x3 = document.getElementById("x3").value;
    var y3 = document.getElementById("y3").value;
    document.getElementById("x2").value = null;
    document.getElementById("y2").value = null;
    document.getElementById("x3").value = null;
    document.getElementById("y3").value = null;
    var tri = new Shapes.Triangle(shape[0],shape[1],shape[2],x2,y2,x3,y3);
    tri.draw();
    tri.toString();
});

document.getElementById("addSeg").addEventListener('click',function(){
    var shape = getShape();
    var segX2 = document.getElementById("segX2").value;
    var segY2 = document.getElementById("segY2").value;
    document.getElementById("segX2").value = null;
    document.getElementById("segY2").value = null;
    var seg = new Shapes.Segment(shape[0],shape[1],shape[2],segX2,segY2);
    seg.draw();
    seg.toString();
});


