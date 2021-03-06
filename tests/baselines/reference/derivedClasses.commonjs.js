var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var Red = (function (_super) {
    __extends(Red, _super);
    function Red() {
        _super.apply(this, arguments);

    }
    Red.prototype.shade = function () {
        var _this = this;
        var getHue = function () {
            return _this.hue();
        };
        return getHue() + " red";
    };
    return Red;
})(Color);
var Color = (function () {
    function Color() { }
    Color.prototype.shade = function () {
        return "some shade";
    };
    Color.prototype.hue = function () {
        return "some hue";
    };
    return Color;
})();
var Blue = (function (_super) {
    __extends(Blue, _super);
    function Blue() {
        _super.apply(this, arguments);

    }
    Blue.prototype.shade = function () {
        var _this = this;
        var getHue = function () {
            return _this.hue();
        };
        return getHue() + " blue";
    };
    return Blue;
})(Color);
var r = new Red();
var b = new Blue();
WScript.Echo(r.shade());
WScript.Echo(r.hue());
WScript.Echo(b.shade());
WScript.Echo(b.hue());