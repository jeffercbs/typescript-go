//// [tests/cases/compiler/constEnumMergingWithValues3.ts] ////

//// [m1.ts]
enum foo { A }
module foo {
    const enum E { X }
}

export = foo

//// [m1.js]
"use strict";
var foo;
(function (foo) {
    foo[foo["A"] = 0] = "A";
})(foo || (foo = {}));
module.exports = foo;
