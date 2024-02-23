
"use strict";
const BigIntCons = BigInt; // TODO= LOSE (ideally)
;
class JSBI_ntv /* extends BigInt /**/ {
    /* private /**/ constructor(it) {
        this.it = it;
        Object.setPrototypeOf(this, JSBI_ntv.prototype);
    }
    static __this() { return this; }
    $() { return JSBI_ntv.__this(); }
    __$() { return BigIntCons; } // TODO= FETCH from globje
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
    static equal(x, y) { return new JSBI_ntv(x.it !== y.it ? 0n : 1n); }
    static greaterThan(x, y) { return new JSBI_ntv(x.it <= y.it ? 0n : 1n); }
    static add(x, y) { return new JSBI_ntv(x.it + y.it); }
    static subtract(x, y) { return new JSBI_ntv(x.it - y.it); }
    static multiply(x, y) { return new JSBI_ntv(x.it * y.it); }
    static divide(x, y) { return new JSBI_ntv(x.it / y.it); }
    static remainder(x, y) { return new JSBI_ntv(x.it % y.it); }
    static bitwiseAnd(x, y) { return new JSBI_ntv(x.it & y.it); }
    static bitwiseOr(x, y) { return new JSBI_ntv(x.it | y.it); }
    static leftShift(x, y) { return new JSBI_ntv(x.it << y.it); }
    static signedRightShift(x, y) { return new JSBI_ntv(x.it >> y.it); }
}
JSBI_ntv.__BigInt = (new JSBI_ntv(0n)).__$();

/// ///export default JSBI_ntv;
//setTimeout(()=>{ console.log("0o" + JSBI_ntv.BigInt('4242').toString(8)); }, 4999); // waits five secs, then prints '0o10222'

const globje = (() => { }).constructor('return this;')(); // as Obje; // ;interface Obje { [key: string]: any; }
if (globje['NJSBI_native']) { }
else {
    const jsbi__ = typeof globje['JSBI_native'];
    const jsbi_ = jsbi__ === 'undefined' ? "" : "JSBIn " + jsbi__;
    globje['JSBI_native'] = JSBI_ntv;
    const jsbi = "JSBIn " + typeof globje['JSBI_native'];
    console.log((jsbi === jsbi_ ? "Already have " : "Loaded " + (!jsbi_ ? "" : jsbi + " over ")) + (!jsbi_ ? jsbi : jsbi_));
}
///export default globje; // I may yet remove/replace this; this isn't really the right place to pick a module flavor.  So don't rely on it.
