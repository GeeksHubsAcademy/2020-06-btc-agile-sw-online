var PayPal = /** @class */ (function () {
    function PayPal() {
    }
    PayPal.prototype.send = function (value) {
        console.log("Send Money! - " + value);
    };
    return PayPal;
}());
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.save = function (value) {
        console.log("save Money! - " + value);
    };
    return Database;
}());
var ShopOnline = /** @class */ (function () {
    function ShopOnline(pay, dba) {
        this.pay = pay;
        this.dba = dba;
    }
    ShopOnline.prototype.buy = function (thing) {
        this.pay.send(thing);
        this.dba.save(thing);
    };
    return ShopOnline;
}());
var Main = /** @class */ (function () {
    function Main(shop) {
        this.shop = shop;
    }
    Main.prototype.execute = function () {
        this.shop.buy("Curso GeeksHubs Academy!");
    };
    return Main;
}());
var payPal = new PayPal();
var dba = new Database();
var shopOnline = new ShopOnline(payPal, dba);
var main = new Main(shopOnline);
main.execute();
//TRAZA
//C:\Program Files\nodejs\node.exe out\dependencyInversion.js 
//Send Money! - Curso GeeksHubs Academy!
//Save Money! - Curso GeeksHubs Academy!
//# sourceMappingURL=dependencyInversion.js.map