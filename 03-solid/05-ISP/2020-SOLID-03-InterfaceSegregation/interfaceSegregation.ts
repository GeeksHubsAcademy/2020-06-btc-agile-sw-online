interface IImpresora {
  getGrisis() : boolean;
  getColores() : boolean;
  getBlancoNegro() : boolean;
}

class Impresora implements IImpresora {

  private _grises:boolean;
  private _colores:boolean;
  private _blancoNegro:boolean;

  constructor(grises:boolean,colores:boolean,blancoNegro:boolean){
    this._grises = grises;
    this._colores = colores;  
    this._blancoNegro = blancoNegro;
  }

  getGrisis(): boolean {
    return this._grises;
  }
  getColores(): boolean {
    return this._colores;
  }

  getBlancoNegro(): boolean {
    throw new Error("Method not implemented.");
  }

}

class Main {

    print(rect: IImpresora[] ) : void {
        rect.forEach(it => {
            console.log(it.getGrisis());
            console.log(it.getColores());
            console.log(it.getBlancoNegro());
        });
  } }

   let cannon = new Impresora(true,true,true);
   let sharp = new Impresora(false,true,false);
   let hp = new Impresora(true,false,true);

   //ERROR
   let main = new Main();
   main.print([cannon,sharp,hp]);
   