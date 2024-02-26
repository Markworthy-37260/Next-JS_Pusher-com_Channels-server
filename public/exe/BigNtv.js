"use strict";
//
// JSBI callalike original class for browsers with native bigint support
//
;
const BigIntConstructor_ = BigInt; // TODO= LOSE (ideally)
;
class JSBI_ntv /* extends BigInt /**/ {
    /* private /**/ constructor(it) {
        this.it = it;
        Object.setPrototypeOf(this, JSBI_ntv.prototype);
    }
    static __this() { return this; }
    $() { return JSBI_ntv.__this(); }
    __$() { return BigIntConstructor_; } // TODO= FETCH from globje
    static __Num2BigInt(arg) {
        if (Number.isFinite(arg) && Math.floor(arg) === arg) { }
        else
            throw new RangeError('The number ' + arg + ' cannot be converted to '
                + 'a BigInt because it is not an integer');
        return new JSBI_ntv(JSBI_ntv.__BigInt(arg));
    }
    static BigInt(arg) {
        if (typeof arg !== 'string') { }
        else
            return new JSBI_ntv(JSBI_ntv.__BigInt(arg));
        if (typeof arg !== 'number') { }
        else
            return JSBI_ntv.__Num2BigInt(arg);
        if (typeof arg !== 'boolean') { }
        else
            return new JSBI_ntv(arg ? 1n : 0n);
        if (typeof arg !== 'object') { }
        else {
            if (arg.constructor === JSBI_ntv)
                return arg;
            //      const primitive= JSBI_ntv.__toPrimitive(arg);
            //      return JSBI_ntv.JSBI_ntv.__BigInt(primitive); // TODO= ADD BACK
        }
        throw new TypeError('Cannot convert ' + arg + ' to a BigInt');
    }
    toDebugString() { return this.it.toString(); } // TODO= CHECK= orig
    toString(radix) { return this.it.toString(radix || 10); } // TODO= (ditto)
    //valueOf() :bigint { return this.it; } // TODO= MORE
    static toNumber(it) { return parseInt(it.it.toString()); } // TODO= better
    static equal(x, y) { return !(x.it !== y.it); }
    static greaterThan(x, y) { return !(x.it <= y.it); }
    static add(x, y) { return new JSBI_ntv(x.it + y.it); }
    static subtract(x, y) { return new JSBI_ntv(x.it - y.it); }
    static multiply(x, y) { return new JSBI_ntv(x.it * y.it); }
    static divide(x, y) { return new JSBI_ntv(x.it / y.it); }
    static remainder(x, y) { return new JSBI_ntv(x.it % y.it); }
    static bitwiseAnd(x, y) { return new JSBI_ntv(x.it & y.it); }
    static bitwiseOr(x, y) { return new JSBI_ntv(x.it | y.it); }
    static leftShift(x, y) { return new JSBI_ntv(x.it << y.it); }
    static signedRightShift(x, y) { return new JSBI_ntv(x.it >> y.it); }
} /**/
JSBI_ntv.__BigInt = (new JSBI_ntv(0n)).__$();
((() => {
    ;
    const globje = (() => { }).constructor('return this;')();
    const idealName = 'JSBI_native';
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
        globje[hopedName] = JSBI_ntv;
        console.log("Loaded JSBIn as " + hopedName);
    }
})()); /**/

