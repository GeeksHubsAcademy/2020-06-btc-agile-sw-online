class Mamifero {
    protected patas: number;
    protected nombre:string;

    constructor(nombre: string,patas: number,) {
        this.nombre = nombre;
        this.patas = patas;
      }

      imprimirPatas(){
        console.log("Mamifero: "+this.nombre+" - Patas: "+this.patas);
      }
}

class Caballo extends Mamifero {
    constructor(nombre: string,patas: number,) {
        super(nombre,patas);
      }

}

let pato = new Mamifero('Pato',2);
let serpiente = new Caballo("Caballo",4);
pato.imprimirPatas();
serpiente.imprimirPatas();

//TRAZA
//C:\Program Files\nodejs\node.exe --inspect-brk=41706 out\singleResponibility.js 
//Debugger listening on ws://127.0.0.1:41706/82357ae5-0e51-4675-8563-fa78fd503d2e
//For help, see: https://nodejs.org/en/docs/inspector

//Mamifero: Pato - Patas: 2
//Mamifero: Caballo - Patas: 4