abstract class Shape {
  abstract area(): number;
}

class Rectangle extends Shape
{
  private _width: number;
  private _height:number;

  constructor(width: number,height:number ){
    super();
    this._height = height;
    this._width = width;
  }

  get height(): number { return this._height;}
  get width(): number { return this._width;}

  area(): number {
    return this._width*this._height;
  }
}

class Circulo extends Shape
{
   private _radio:number;
   constructor(radio:number ){
    super();
    this._radio = radio;
  }

  area(): number {
    return this._radio*this._radio*Math.PI;
  }
}

class Calculator
{
    Area(shapes: Shape[] ) : number
    {
        let area : number = 0;
        shapes.forEach(it => {
          area += it.area();
        });

        return area;
    }
}


let calculator = new Calculator();
let rec01 = new Rectangle(10, 20);
let rec02 = new Circulo(30);
let rec03 = new Circulo(50);
let rec04 = new Rectangle(60, 40);
let res = calculator.Area([rec01,rec02, rec03,rec04]);
console.log("Result: "+res);