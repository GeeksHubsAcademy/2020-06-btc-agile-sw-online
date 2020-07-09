var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this._height = height;
        _this._width = width;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () { return this._height; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () { return this._width; },
        enumerable: true,
        configurable: true
    });
    Rectangle.prototype.area = function () {
        return this._width * this._height;
    };
    return Rectangle;
}(Shape));
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(radio) {
        var _this = _super.call(this) || this;
        _this._radio = radio;
        return _this;
    }
    Circulo.prototype.area = function () {
        return this._radio * this._radio * Math.PI;
    };
    return Circulo;
}(Shape));
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.Area = function (shapes) {
        var area = 0;
        shapes.forEach(function (it) {
            area += it.area();
        });
        return area;
    };
    return Calculator;
}());
var calculator = new Calculator();
var rec01 = new Rectangle(10, 20);
var rec02 = new Circulo(30);
var rec03 = new Circulo(50);
var rec04 = new Rectangle(60, 40);
var res = calculator.Area([rec01, rec02, rec03, rec04]);
console.log("Result: " + res);
//# sourceMappingURL=openClosed.js.map