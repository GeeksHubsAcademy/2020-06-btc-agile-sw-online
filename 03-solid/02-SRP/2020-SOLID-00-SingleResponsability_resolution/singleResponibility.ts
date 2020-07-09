 class Mamifero {
    protected _patas: number;
    protected _nombre:string;

    constructor(nombre: string,patas: number,) {
        this._nombre = nombre;
        this._patas = patas;
      }

      get nombre(): string {
        return this._nombre;
      }

      get patas(): number {
        return this._patas;
      }

}

class Caballo extends Mamifero {
    constructor() {
        super("Caballo",4);
      }
}

class Mono extends Mamifero {
  constructor() {
      super("Mono",2);
    }
}

class Printeable {
  static log(mamifero: Mamifero){
    console.log("Mamifero: "+mamifero.nombre+" - Patas: "+mamifero.patas);
  }
}

let caballo = new Caballo();
let mono = new Mono();
Printeable.log(caballo);
Printeable.log(mono);

//TRAZA
//C:\Program Files\nodejs\node.exe --inspect-brk=24285 out\singleResponibility_resolution.js 
//Debugger listening on ws://127.0.0.1:24285/dcd4fb35-b387-41b9-bdb5-ad306ae3d0b3
//For help, see: https://nodejs.org/en/docs/inspector
//
//Mamifero: Caballo - Patas: 4
//Mamifero: Mono - Patas: 2