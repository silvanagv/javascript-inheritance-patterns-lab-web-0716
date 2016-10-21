function Point(x,y){
  this.x = x;
  this.y = y;
  this.toString = function(){
    return `${x}, ${y}`
  }
}

function Shape(){
}

Shape.prototype.addToPlane = function(a,b){
  this.position = new Point(a,b)
}

Shape.prototype.move = function(x,y){
  this.position = new Point(x,y)
}

function Circle(radius){
  this.radius = radius;
  this.diameter = function(){
    return 2*this.radius
  }
  this.circumference = function(){
    return 2*Math.PI*this.radius
  }
  this.area = function(){
    return (Math.PI * this.radius^2)
  }
  Shape.call(this,radius,radius)
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

function Side(length){
  this.length = length
}

function Polygon(sides){
  Shape.call(this)
  this.sides = sides
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon
Polygon.prototype.perimeter = function(){
  var per = 0
  for (var i = 0; i < this.sides.length; i++){
    per += this.sides[i].length
  }
  return per
}

Polygon.prototype.numberOfSides = function(){
  return this.sides.length
}


function Triangle(side1,side2,side3){
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)])
}
Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle


function Quadrilateral(side1,side2,side3,side4){
  Polygon.call(this, [new Side(side1),new Side(side2),new Side(side3),new Side(side4)])
}
Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Rectangle(width, height){
  Quadrilateral.call(this, width, height, width, height)
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(x){
  Rectangle.call(this, x, x)
  this.listProperties = function(){
  }
}
Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
