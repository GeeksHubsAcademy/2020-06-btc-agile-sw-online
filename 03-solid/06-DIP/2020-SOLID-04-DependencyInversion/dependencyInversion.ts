class  PayPal {
  send(value : string) : void {
    console.log("Send Money! - "+value);
  }
}

class  Database {
  save(value : string) : void {
    console.log("save Money! - "+value);
  }
}

class ShopOnline {

  constructor(){
  }

  buy(thing : string): void {
    let payPal = new PayPal();
    payPal.send(thing);
    let dba = new Database();
    dba.save(thing)
  }

}

class Main {

  execute() : void{
    let newLocal = new ShopOnline();
    newLocal.buy("Curso GeeksHubs Academy!");
  }

}

let main = new Main();
main.execute();
   
//TRAZA
//C:\Program Files\nodejs\node.exe out\dependencyInversion.js 
//Send Money! - Curso GeeksHubs Academy!
//Save Money! - Curso GeeksHubs Academy!