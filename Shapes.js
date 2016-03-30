
var Shapes = (function(){

    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    function Shape(x,y,color){
        this._x = x;
        this._y = y;
        this._color = color;
    }


    var Circle = (function(){
        function Circle(x,y,color,radius){
            Shape.call(this,x,y,color);
            this._radius = radius;
        }


        Circle.prototype.draw = function(){
            context.beginPath();
            context.arc(this._x,this._y, this._radius, 0, 2 * Math.PI, false);
            context.fillStyle = this._color;
            context.fill();
        };

        Circle.prototype.toString = function(){
            document.getElementById("select").innerHTML += "<option>Circle; Position - x:" +this._x + " , y:" + this._y+ "; Color - "+ this._color+"; Radius - "+ this._radius +"</option>";
        };

        return Circle;
    })();

    var Rectangle = (function(){
        function Rectangle(x,y,color,sideA,sideB){
            Shape.call(this,x,y,color);
            this._sideA = sideA;
            this._sideB = sideB;
        }

        Rectangle.prototype.draw = function(x,y){
            context.beginPath();
            context.moveTo(this._x,this._y);
            context.rect(x?x:this._x, y?y:this._y,this._sideA,this._sideB);
            context.fillStyle = this._color;
            context.fill();

        };

        Rectangle.prototype.toString = function(){
            document.getElementById("select").innerHTML += "<option>Rectangle; Position - x:" +this._x + " , y:" + this._y+ "; Color - "+ this._color+"; Side A - "+ this._sideA + "; Side B - " + this._sideB + "</option>";
        };

        return Rectangle;
    })();

    var Triangle = (function(){
        function Triangle(x,y,color,x2,y2,x3,y3){
            Shape.call(this,x,y,color);
            this._x2 = x2;
            this._y2 = y2;
            this._x3 = x3;
            this._y3 = y3;
        }

        Triangle.prototype.draw = function(){
            context.beginPath();
            context.moveTo(this._x,this._y);
            context.lineTo(this._x2,this._y2);
            context.lineTo(this._x3,this._y3);
            context.lineTo(this._x,this._y);
            context.fillStyle = this._color;
            context.fill();

        };
        Triangle.prototype.toString = function(){
            document.getElementById("select").innerHTML += "<option>Triangle; Position - x:" +this._x + " , y:" + this._y + "; Color: " + this._color + "</option>";
        };
        return Triangle;
    })();

    var Segment =  (function(){
        function Segment(x,y,color,x2,y2){
            Shape.call(this,x,y,color);
            this._x2 = x2;
            this._y2 = y2;
        }

        Segment.prototype.draw = function(){
            context.beginPath();
            context.moveTo(this._x,this._y);
            context.lineTo(this._x2,this._y2);
            context.strokeStyle = this._color;
            context.stroke();
        };
        Segment.prototype.toString = function(){
            document.getElementById("select").innerHTML += "<option>Segment; Point A - x:" +this._x + " , y:" + this._y+ "; Color - "+ this._color+"; Point B x2: " + this._x2 + ", y2: " + this._y2 +"</option>";
        };
        return Segment;
    })();

    return {
        Segment:Segment,
        Rectangle:Rectangle,
        Circle:Circle,
        Triangle:Triangle
    }

})();


