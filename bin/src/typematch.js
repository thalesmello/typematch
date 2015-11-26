var Wildcard = (function () {
    function Wildcard() {
        this.identity = {};
    }
    Wildcard.prototype.equals = function (other) {
        return this.identity === other.identity;
    };
    return Wildcard;
})();
exports.Wildcard = Wildcard;
exports._ = new Wildcard();
function checkEquals(values, checks) {
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        var check = checks[i];
        if (!(check instanceof Wildcard && exports._.equals(check) || value === check)) {
            return false;
        }
    }
    return true;
}
function toList(values) {
    if (values instanceof Array) {
        return values;
    }
    else {
        return [values];
    }
}
function matchAny(values) {
    var conditions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        conditions[_i - 1] = arguments[_i];
    }
    for (var _a = 0; _a < conditions.length; _a++) {
        var _b = conditions[_a], checks = _b[0], returnFunc = _b[1];
        if (checkEquals(values, checks)) {
            return returnFunc.apply(void 0, values);
        }
    }
}
exports.matchAny = matchAny;
function extractChecks(args) {
    var checks = args.slice(0, args.length - 1);
    var func = args[args.length - 1];
    return [checks, func];
}
function match1(v1) {
    var conditions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        conditions[_i - 1] = arguments[_i];
    }
    return matchAny.apply(void 0, [[v1]].concat(conditions.map(function (checks) { return extractChecks(checks); })));
}
exports.match1 = match1;
;
function match2(v1, v2) {
    var conditions = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        conditions[_i - 2] = arguments[_i];
    }
    return matchAny.apply(void 0, [[v1, v2]].concat(conditions.map(function (checks) { return extractChecks(checks); })));
}
exports.match2 = match2;
function match3(v1, v2, v3) {
    var conditions = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        conditions[_i - 3] = arguments[_i];
    }
    return matchAny.apply(void 0, [[v1, v2, v3]].concat(conditions.map(function (checks) { return extractChecks(checks); })));
}
exports.match3 = match3;
function match4(v1, v2, v3, v4) {
    var conditions = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        conditions[_i - 4] = arguments[_i];
    }
    return matchAny.apply(void 0, [[v1, v2, v3, v4]].concat(conditions.map(function (checks) { return extractChecks(checks); })));
}
exports.match4 = match4;
function match5(v1, v2, v3, v4, v5) {
    var conditions = [];
    for (var _i = 5; _i < arguments.length; _i++) {
        conditions[_i - 5] = arguments[_i];
    }
    return matchAny.apply(void 0, [[v1, v2, v3, v4, v5]].concat(conditions.map(function (checks) { return extractChecks(checks); })));
}
exports.match5 = match5;
function match6(v1, v2, v3, v4, v5, v6) {
    var conditions = [];
    for (var _i = 6; _i < arguments.length; _i++) {
        conditions[_i - 6] = arguments[_i];
    }
    return matchAny.apply(void 0, [[v1, v2, v3, v4, v5, v6]].concat(conditions.map(function (checks) { return extractChecks(checks); })));
}
exports.match6 = match6;
function match7(v1, v2, v3, v4, v5, v6, v7) {
    var conditions = [];
    for (var _i = 7; _i < arguments.length; _i++) {
        conditions[_i - 7] = arguments[_i];
    }
    return matchAny.apply(void 0, [[v1, v2, v3, v4, v5, v6, v7]].concat(conditions.map(function (checks) { return extractChecks(checks); })));
}
exports.match7 = match7;
function match8(v1, v2, v3, v4, v5, v6, v7, v8) {
    var conditions = [];
    for (var _i = 8; _i < arguments.length; _i++) {
        conditions[_i - 8] = arguments[_i];
    }
    return matchAny.apply(void 0, [[v1, v2, v3, v4, v5, v6, v7, v8]].concat(conditions.map(function (checks) { return extractChecks(checks); })));
}
exports.match8 = match8;
function match9(v1, v2, v3, v4, v5, v6, v7, v8, v9) {
    var conditions = [];
    for (var _i = 9; _i < arguments.length; _i++) {
        conditions[_i - 9] = arguments[_i];
    }
    return matchAny.apply(void 0, [[v1, v2, v3, v4, v5, v6, v7, v8, v9]].concat(conditions.map(function (checks) { return extractChecks(checks); })));
}
exports.match9 = match9;
function match10(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
    var conditions = [];
    for (var _i = 10; _i < arguments.length; _i++) {
        conditions[_i - 10] = arguments[_i];
    }
    return matchAny.apply(void 0, [[v1, v2, v3, v4, v5, v6, v7, v8, v9, v10]].concat(conditions.map(function (checks) { return extractChecks(checks); })));
}
exports.match10 = match10;
