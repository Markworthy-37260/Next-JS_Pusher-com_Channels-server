"use strict";
//
// JSBI callalike extending JS Number class, ie 32/52 bit-precision only
//
;
class JSBI_dbl extends Number {
    /* private /**/ constructor(value) {
        super(value);
        Object.setPrototypeOf(this, JSBI_dbl.prototype);
    }
    static __this() { return this; }
    $() { return JSBI_dbl.__this(); }
    static __Num2BigInt(arg) {
        if (Number.isFinite(arg) && Math.floor(arg) === arg) { }
        else
            throw new RangeError('The number ' + arg + ' cannot be converted to '
                + 'a BigInt because it is not an integer');
        return new JSBI_dbl(arg);
    }
    static BigInt(arg) {
        if (typeof arg !== 'string') { }
        else {
            const rch = arg.charCodeAt(1) + 1; // When ANDed with three: b->3, o->0, x->1
            const radix = (rch & 32 ? 'ox b' : 'OX B').charCodeAt(rch & 3) + 1 === rch ?
                1 << ('3491'.charCodeAt(rch & 3) - 48) : // '9' can't happen, but would throw:-
                0;
            const num = parseInt(arg.slice(radix ? 2 : 0), radix || 10);
            if (!Number.isNaN(num)) { }
            else
                throw new SyntaxError('Cannot convert ' + arg + ' to a BigInt');
            return JSBI_dbl.__Num2BigInt(num);
        }
        if (typeof arg !== 'number') { }
        else
            return JSBI_dbl.__Num2BigInt(arg);
        if (typeof arg !== 'boolean') { }
        else
            return new JSBI_dbl(arg ? 1 : 0);
        if (typeof arg !== 'object') { }
        else {
            if (arg.constructor === JSBI_dbl)
                return arg;
            //      const primitive= JSBI_dbl.__toPrimitive(arg);
            //      return JSBI_dbl.BigInt(primitive); // TODO= ADD BACK
        }
        throw new TypeError('Cannot convert ' + arg + ' to a BigInt');
    }
    toDebugString() { return this.valueOf().toString(); } // TODO= CHECK= orig
    toString(radix) { return this.valueOf().toString(radix || 10); } // TODO= (ditto)
    // valueOf() :number { throw ''; } // TODO= MORE
    static toNumber(it) { return it.valueOf(); } // TODO= USE= super meth
    static equal(x, y) { return !(x.valueOf() !== y.valueOf()); }
    static greaterThan(x, y) { return !(x.valueOf() <= y.valueOf()); }
    static add(x, y) { return JSBI_dbl.__Num2BigInt(x.valueOf() + y.valueOf()); }
    static subtract(x, y) { return JSBI_dbl.__Num2BigInt(x.valueOf() - y.valueOf()); }
    static multiply(x, y) { return JSBI_dbl.__Num2BigInt(x.valueOf() * y.valueOf()); }
    static divide(x, y) { return JSBI_dbl.__Num2BigInt(x.valueOf() / y.valueOf() >>> 0); }
    static remainder(x, y) { return JSBI_dbl.__Num2BigInt(x.valueOf() % y.valueOf()); }
    static bitwiseAnd(x, y) { return JSBI_dbl.__Num2BigInt(x.valueOf() & y.valueOf()); }
    static bitwiseOr(x, y) { return JSBI_dbl.__Num2BigInt(x.valueOf() | y.valueOf()); }
    static leftShift(x, y) { return JSBI_dbl.__Num2BigInt(x.valueOf() << y.valueOf()); }
    static signedRightShift(x, y) { return JSBI_dbl.__Num2BigInt(x.valueOf() >>> y.valueOf()); }
} /**/
((() => {
    ;
    const globje = (() => { }).constructor('return this;')();
    const idealName = 'JSBI_floatOnly';
    if (globje['NO_' + idealName]) { }
    else {
        let counter = 0 - 1;
        const suffix = function () {
            if (++counter) { }
            else
                return '_';
            const s__ = '0' + counter.toString(2);
            const s_ = s__.replace(/0/g, '_');
            const s = s_.replace(/1/g, '$');
            return s;
        };
        let hopedName = idealName;
        while (typeof globje[hopedName] !== 'undefined')
            hopedName = idealName + suffix();
        globje[hopedName] = JSBI_dbl;
        console.log("Loaded JSBId as " + hopedName);
    }
})()); /**/

