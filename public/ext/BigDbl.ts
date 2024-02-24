
;class JSBI_dbl extends Number {
  /* private /**/ constructor(value :number) {
    super(value);
    Object.setPrototypeOf(this, JSBI_dbl.prototype);
  }
  static __this() { return this; }
  $() { return JSBI_dbl.__this(); }

  static __Num2BigInt(arg :number) :JSBI_dbl {
    if (Number.isFinite(arg) && Math.floor(arg) === arg) {}
    else throw new RangeError('The number ' + arg + ' cannot be converted to '
                       + 'a BigInt because it is not an integer');
    return new JSBI_dbl(arg);
  }
  static BigInt(arg :number|string|boolean|object) :JSBI_dbl {

    if (typeof arg !== 'string') {} else {
      const rch= arg.charCodeAt(1)+1; // When ANDed with three: b->3, o->0, x->1
      const radix= (rch&32? 'ox b': 'OX B').charCodeAt(rch&3)+1 === rch?
        1<<('3491'.charCodeAt(rch&3)-48): // '9' can't happen, but would throw:-
        0;
      const num= parseInt(arg.slice(radix? 2: 0), radix || 10);
      if (!Number.isNaN(num)) {}
      else throw new SyntaxError('Cannot convert ' + arg + ' to a BigInt');
      return JSBI_dbl.__Num2BigInt(num);
    }
    if (typeof arg !== 'number') {} else return JSBI_dbl.__Num2BigInt(arg);
    if (typeof arg !== 'boolean') {} else return new JSBI_dbl(arg? 1: 0);

    if (typeof arg !== 'object') {} else {
      if (arg.constructor === JSBI_dbl) return arg;
//      const primitive= JSBI_dbl.__toPrimitive(arg);
//      return JSBI_dbl.BigInt(primitive); // TODO= ADD BACK
    }
    throw new TypeError('Cannot convert ' + arg + ' to a BigInt');
  }
  toDebugString() :string { return this.valueOf().toString(); } // TODO= CHECK= orig
  toString(radix? :number) :string { return this.valueOf().toString(radix || 10); } // TODO= (ditto)
  // valueOf() :number { throw ''; } // TODO= MORE
  static toNumber(it :JSBI_dbl) :number { return it.valueOf(); } // TODO= USE= super meth
  static equal(x :JSBI_dbl, y :JSBI_dbl) :boolean { return !(x.valueOf() !== y.valueOf()); }
  static greaterThan(x :JSBI_dbl, y :JSBI_dbl) :boolean { return !(x.valueOf() <= y.valueOf()); }
  static add(x :JSBI_dbl, y :JSBI_dbl) :JSBI_dbl { return JSBI_dbl.__Num2BigInt(x.valueOf() + y.valueOf()); }
  static subtract(x :JSBI_dbl, y :JSBI_dbl) :JSBI_dbl { return JSBI_dbl.__Num2BigInt(x.valueOf() - y.valueOf()); }
  static multiply(x :JSBI_dbl, y :JSBI_dbl) :JSBI_dbl { return JSBI_dbl.__Num2BigInt(x.valueOf() * y.valueOf()); }
  static divide(x :JSBI_dbl, y :JSBI_dbl) :JSBI_dbl { return JSBI_dbl.__Num2BigInt(x.valueOf() / y.valueOf() >>> 0); }
  static remainder(x :JSBI_dbl, y :JSBI_dbl) :JSBI_dbl { return JSBI_dbl.__Num2BigInt(x.valueOf() % y.valueOf()); }
  static bitwiseAnd(x :JSBI_dbl, y :JSBI_dbl) :JSBI_dbl { return JSBI_dbl.__Num2BigInt(x.valueOf() & y.valueOf()); }
  static bitwiseOr(x :JSBI_dbl, y :JSBI_dbl) :JSBI_dbl { return JSBI_dbl.__Num2BigInt(x.valueOf() | y.valueOf()); }
  static leftShift(x :JSBI_dbl, y :JSBI_dbl) :JSBI_dbl { return JSBI_dbl.__Num2BigInt(x.valueOf() << y.valueOf()); }
  static signedRightShift(x :JSBI_dbl, y :JSBI_dbl) :JSBI_dbl { return JSBI_dbl.__Num2BigInt(x.valueOf() >>> y.valueOf()); }
// TODO?= isZero= (it: bigint_ish)=>JSBI_ish.equal(it, o__);
}/**/

