var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function Log(_, name, descriptor) {
    var newDescriptor = __assign(__assign({}, descriptor), { value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Calling ".concat(name, " with arguments:"));
            console.dir(args);
            var result = descriptor.value.apply(this, args);
            console.log("Result:");
            console.dir(result);
            return result;
        } });
    return newDescriptor;
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log(calculator.add(1, 2));
