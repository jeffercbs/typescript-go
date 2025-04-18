//// [tests/cases/compiler/complicatedPrivacy.ts] ////

//// [complicatedPrivacy.ts]
module m1 {
    export module m2 {


        export function f1(c1: C1) {
        }
        export function f2(c2: C2) {
        }

        export class C2 implements m3.i3 {
            public get p1(arg) {
                return new C1();
            }

            public set p1(arg1: C1) {
            }

            public f55() {
                return "Hello world";
            }
        }
    }

    export function f2(arg1: { x?: C1, y: number }) {
    }

    export function f3(): {
        (a: number) : C1;
    } {
        return null;
    }

    export function f4(arg1: 
    {
    [number]: C1; // Used to be indexer, now it is a computed property
    }) {
    }


    export function f5(arg2: {
        new (arg1: C1) : C1
    }) {
    }
    module m3 {
        function f2(f1: C1) {
        }

        export interface i3 {
            f55(): string;
        }
    }

    class C1 {
    }

    interface i {
        x: number;
    }

    export class C5 implements i {
        public x: number;
    }

    export var v2: C1[];
}

class C2 {
}

module m2 {
    export module m3 {

        export class c_pr  implements mglo5.i5, mglo5.i6 {
            f1() {
                return "Hello";
            }
        }
        
        module m4 {
            class C {
            }
            module m5 {
                
                export module m6 {
                    function f1() {
                        return new C();
                    }
                }
            }
        }

    }
}

module mglo5 {
    export interface i5 {
        f1(): string;
    }

    interface i6 {
        f6(): number;
    }
}


//// [complicatedPrivacy.js]
var m1;
(function (m1) {
    let m2;
    (function (m2) {
        function f1(c1) {
        }
        m2.f1 = f1;
        function f2(c2) {
        }
        m2.f2 = f2;
        class C2 {
            get p1(arg) {
                return new C1();
            }
            set p1(arg1) {
            }
            f55() {
                return "Hello world";
            }
        }
        m2.C2 = C2;
    })(m2 = m1.m2 || (m1.m2 = {}));
    function f2(arg1) {
    }
    m1.f2 = f2;
    function f3() {
        return null;
    }
    m1.f3 = f3;
    function f4(arg1) {
    }
    m1.f4 = f4;
    function f5(arg2) {
    }
    m1.f5 = f5;
    let m3;
    (function (m3) {
        function f2(f1) {
        }
    })(m3 || (m3 = {}));
    class C1 {
    }
    class C5 {
        x;
    }
    m1.C5 = C5;
})(m1 || (m1 = {}));
class C2 {
}
var m2;
(function (m2) {
    let m3;
    (function (m3) {
        class c_pr {
            f1() {
                return "Hello";
            }
        }
        m3.c_pr = c_pr;
        let m4;
        (function (m4) {
            class C {
            }
            let m5;
            (function (m5) {
                let m6;
                (function (m6) {
                    function f1() {
                        return new C();
                    }
                })(m6 = m5.m6 || (m5.m6 = {}));
            })(m5 || (m5 = {}));
        })(m4 || (m4 = {}));
    })(m3 = m2.m3 || (m2.m3 = {}));
})(m2 || (m2 = {}));
