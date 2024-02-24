
const BigIntCons :BigIntConstructor= BigInt; // TODO= LOSE (ideally)

;class JSBI_ntv /* extends BigInt /**/ { // TODO?= MAYBE= extend Number?
  /* private /**/ constructor(private it :bigint) { //super(NaN);
    Object.setPrototypeOf(this, JSBI_ntv.prototype);
  }
  static __this() { return this; }
  $() { return JSBI_ntv.__this(); }
  __$() :BigIntConstructor { return BigIntCons; } // TODO= FETCH from globje
  static __BigInt :BigIntConstructor= (new JSBI_ntv(0n)).__$();

  static __Num2BigInt(arg :number) :JSBI_ntv {
    if (Number.isFinite(arg) && Math.floor(arg) === arg) {}
    else throw new RangeError('The number ' + arg + ' cannot be converted to '
                       + 'a BigInt because it is not an integer');
    return new JSBI_ntv(JSBI_ntv.__BigInt(arg));
  }
  static BigInt(arg :number|string|boolean|object) :JSBI_ntv {

    if (typeof arg !== 'string') {} else return new JSBI_ntv(JSBI_ntv.__BigInt(arg));
    if (typeof arg !== 'number') {} else return JSBI_ntv.__Num2BigInt(arg);
    if (typeof arg !== 'boolean') {} else return new JSBI_ntv(arg? 1n: 0n);

    if (typeof arg !== 'object') {} else {
      if (arg.constructor === JSBI_ntv) return arg;
//      const primitive= JSBI_ntv.__toPrimitive(arg);
//      return JSBI_ntv.JSBI_ntv.__BigInt(primitive); // TODO= ADD BACK
    }
    throw new TypeError('Cannot convert ' + arg + ' to a BigInt');
  }
  toDebugString() :string { return this.it.toString(); } // TODO= CHECK= orig
  toString(radix? :number) :string { return this.it.toString(radix || 10); } // TODO= (ditto)
  //valueOf() :bigint { return this.it; } // TODO= MORE
  static toNumber(it :JSBI_ntv) :number { return parseInt(it.it.toString()); } // TODO= better
  static equal(x :JSBI_ntv, y :JSBI_ntv) :boolean { return !(x.it !== y.it); }
  static greaterThan(x :JSBI_ntv, y :JSBI_ntv) :boolean { return !(x.it <= y.it); }
  static add(x :JSBI_ntv, y :JSBI_ntv) :JSBI_ntv { return new JSBI_ntv(x.it + y.it); }
  static subtract(x :JSBI_ntv, y :JSBI_ntv) :JSBI_ntv { return new JSBI_ntv(x.it - y.it); }
  static multiply(x :JSBI_ntv, y :JSBI_ntv) :JSBI_ntv { return new JSBI_ntv(x.it * y.it); }
  static divide(x :JSBI_ntv, y :JSBI_ntv) :JSBI_ntv { return new JSBI_ntv(x.it / y.it); }
  static remainder(x :JSBI_ntv, y :JSBI_ntv) :JSBI_ntv { return new JSBI_ntv(x.it % y.it); }
  static bitwiseAnd(x :JSBI_ntv, y :JSBI_ntv) :JSBI_ntv { return new JSBI_ntv(x.it & y.it); }
  static bitwiseOr(x :JSBI_ntv, y :JSBI_ntv) :JSBI_ntv { return new JSBI_ntv(x.it | y.it); }
  static leftShift(x :JSBI_ntv, y :JSBI_ntv) :JSBI_ntv { return new JSBI_ntv(x.it << y.it); }
  static signedRightShift(x :JSBI_ntv, y :JSBI_ntv) :JSBI_ntv { return new JSBI_ntv(x.it >> y.it); }
// TODO?= isZero= (it: bigint_ish)=>JSBI_ish.equal(it, o__);
}/**/

