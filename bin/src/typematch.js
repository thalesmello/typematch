function match(value) {
    var conditions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        conditions[_i - 1] = arguments[_i];
    }
    for (var _a = 0; _a < conditions.length; _a++) {
        var _b = conditions[_a], check = _b[0], returnFunc = _b[1];
        if (value === check) {
            return returnFunc();
        }
    }
}
exports.match = match;
