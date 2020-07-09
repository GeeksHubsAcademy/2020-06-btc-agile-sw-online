interface IPay{
  send(value:string) : void;
}

class PayPal implements IPay {
  send(value : string) : void {
    console.log("Send Money! - "+value);
  }
}

interface Persistence {
  save(value : string) : void
}

class Database  implements Persistence{
  save(value : string) : void {
    console.log("save Money! - "+value);
  }
}


interface ecommerce {
  buy(thing : string) : void;
}

class ShopOnline implements ecommerce {

  private pay:IPay;
  private dba:Persistence;

  constructor(pay:IPay, dba:Persistence){
    this.pay =pay;
    this.dba = dba;
  }

  buy(thing : string): void {
    this.pay.send(thing);
    this.dba.save(thing)
  }

}

class Main {

  private shop:ecommerce;
  constructor(shop:ecommerce){
    this.shop = shop;
  }

  execute() : void{
    this.shop.buy("Curso GeeksHubs Academy!");
  }

}

let payPal = new PayPal();
let dba = new Database();
let shopOnline = new ShopOnline(payPal,dba);
let main = new Main(shopOnline);
main.execute();
   
//TRAZA
//C:\Program Files\nodejs\node.exe out\dependencyInversion.js 
//Send Money! - Curso GeeksHubs Academy!
//Save Money! - Curso GeeksHubs Academy!