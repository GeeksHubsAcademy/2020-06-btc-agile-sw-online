var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this._height = height;
        this._width = width;
    }
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}());
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.Area = function (shapes) {
        var area = 0;
        shapes.forEach(function (it) {
            area += it.width * it.height;
        });
        return area;
    };
    return Calculator;
}());
var calculator = new Calculator();
var rec01 = new Rectangle(10, 20);
var rec02 = new Rectangle(30, 20);
var rec03 = new Rectangle(50, 30);
var rec04 = new Rectangle(60, 40);
var res = calculator.Area([rec01, rec02, rec03, rec04]);
console.log("Result: " + res);
//# sourceMappingURL=openClosed.js.map