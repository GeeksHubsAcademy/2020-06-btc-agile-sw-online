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
    function ShopOnline() {
    }
    ShopOnline.prototype.buy = function (thing) {
        var payPal = new PayPal();
        payPal.send(thing);
        var dba = new Database();
        dba.save(thing);
    };
    return ShopOnline;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.execute = function () {
        var newLocal = new ShopOnline();
        newLocal.buy("Curso GeeksHubs Academy!");
    };
    return Main;
}());
var main = new Main();
main.execute();
//# sourceMappingURL=dependencyInversion.js.map