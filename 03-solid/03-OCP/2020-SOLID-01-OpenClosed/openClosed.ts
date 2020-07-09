class Rectangle
{
  private _width: number;
  private _height:number;

  constructor(width: number,height:number ){
    this._height = height;
    this._width = width;
  }

  get height(): number {
    return this._height;
  }

  get width(): number {
    return this._width;
  }

  set width(value:number){
    this._width = value;
  }

  set height(value:number){
    this._height = value;
  }
}

class Calculator
{
    Area(shapes: Rectangle[] ) : number
    {
        let area : number = 0;
        shapes.forEach(it => {
          area += it.width*it.height;
        });

        return area;
    }
}


let calculator = new Calculator();
let rec01 = new Rectangle(10, 20);
let rec02 = new Rectangle(30, 20);
let rec03 = new Rectangle(50, 30);
let rec04 = new Rectangle(60, 40);
let res = calculator.Area([rec01,rec02, rec03,rec04]);
console.log("Result: "+res);
