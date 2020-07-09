interface IGrises {  getGris() : boolean; }
interface IColores { getColor() : boolean;}
interface IBlancoNegros { getBlancoNegro() : boolean;}

abstract class Impresora {
  protected _grises:boolean;
  protected _colores:boolean;
  protected _blancoNegro:boolean;
  
  constructor(grises:boolean,colores:boolean,blancoNegro:boolean){
    this._grises = grises;
    this._colores = colores;  
    this._blancoNegro = blancoNegro;
  }
}

class Cannon extends Impresora implements IGrises {
  constructor(){
    super(true,false,false);
  }
  getGris(): boolean { return this._grises; }
}

class Sharp extends Impresora implements IColores {
  constructor(){
    super(false,true,false);
  }
  getColor(): boolean { return this._colores; }
}

class Hp extends Impresora implements IBlancoNegros {
  constructor(){
    super(false,false,true);
  }
  getBlancoNegro(): boolean { return this._blancoNegro; }
}

let cannon = new Cannon();
let sharp = new Sharp();
let hp = new Hp();

   