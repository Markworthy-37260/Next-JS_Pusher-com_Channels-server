
;const NML11th_DLSign_globje=
  ( ()=>{} ).constructor('return this;')() as { [key: string]: any; };

;(((je)=>{ je['JSBI']=
          je['JSBI_native'] || je['JSBI_GCLabs'] || je['JSBI_floatOnly'];
})(NML11th_DLSign_globje));

// PREAMBULATORY CONTEXT - Copied here to compile in the TS playground
;declare class JSBI extends Array {
    private sign;
    private constructor();
    static BigInt(arg: number | string | boolean | object): JSBI;
    toDebugString(): string;
    toString(radix?: number): string;
    valueOf(): void;
    static toNumber(x: JSBI): number; /**
    static unaryMinus(x: JSBI): JSBI;
    static bitwiseNot(x: JSBI): JSBI;
    static exponentiate(x: JSBI, y: JSBI): JSBI; /**/
    static multiply(x: JSBI, y: JSBI): JSBI;
    static divide(x: JSBI, y: JSBI): JSBI;
    static remainder(x: JSBI, y: JSBI): JSBI;
    static add(x: JSBI, y: JSBI): JSBI;
    static subtract(x: JSBI, y: JSBI): JSBI;
    static leftShift(x: JSBI, y: JSBI): JSBI;
    static signedRightShift(x: JSBI, y: JSBI): JSBI;
    static unsignedRightShift(): void; /**
    static lessThan(x: JSBI, y: JSBI): boolean;
    static lessThanOrEqual(x: JSBI, y: JSBI): boolean; /**/
    static greaterThan(x: JSBI, y: JSBI): boolean; /**
    static greaterThanOrEqual(x: JSBI, y: JSBI): boolean; /**/
    static equal(x: JSBI, y: JSBI): boolean;
    static notEqual(x: JSBI, y: JSBI): boolean;
    static bitwiseAnd(x: JSBI, y: JSBI): JSBI;
    static bitwiseXor(x: JSBI, y: JSBI): JSBI;
    static bitwiseOr(x: JSBI, y: JSBI): JSBI; /**
    static asIntN(n: number, x: JSBI): JSBI;
    static asUintN(n: number, x: JSBI): JSBI;
    static ADD(x: any, y: any): string | number | JSBI;
    static LT(x: any, y: any): boolean;
    static LE(x: any, y: any): boolean;
    static GT(x: any, y: any): boolean;
    static GE(x: any, y: any): boolean;
    static EQ(x: any, y: any): boolean;
    static NE(x: any, y: any): boolean;
    static DataViewGetBigInt64(dataview: DataView, byteOffset: number, littleEndian?: boolean): JSBI;
    static DataViewGetBigUint64(dataview: DataView, byteOffset: number, littleEndian?: boolean): JSBI;
    static DataViewSetBigInt64(dataview: DataView, byteOffset: number, value: JSBI, littleEndian?: boolean): void;
    static DataViewSetBigUint64(dataview: DataView, byteOffset: number, value: JSBI, littleEndian?: boolean): void;
    static __zero(): JSBI;
    static __oneDigit(value: number, sign: boolean): JSBI;
    __copy(): JSBI;
    __trim(): this;
    __initializeDigits(): void;
    static __decideRounding(x: JSBI, mantissaBitsUnset: number, digitIndex: number, currentDigit: number): 1 | 0 | -1;
    static __fromDouble(value: number): JSBI;
    static __isWhitespace(c: number): boolean;
    static __fromString(string: string, radix?: number): JSBI | null;
    static __fillFromParts(result: JSBI, parts: number[], partsBits: number[]): void;
    static __toStringBasePowerOfTwo(x: JSBI, radix: number): string;
    static __toStringGeneric(x: JSBI, radix: number, isRecursiveCall: boolean): string;
    static __unequalSign(leftNegative: boolean): number;
    static __absoluteGreater(bothNegative: boolean): number;
    static __absoluteLess(bothNegative: boolean): number;
    static __compareToBigInt(x: JSBI, y: JSBI): number;
    static __compareToNumber(x: JSBI, y: number): number;
    static __compareToDouble(x: JSBI, y: number): number;
    static __equalToNumber(x: JSBI, y: number): boolean;
    static __comparisonResultToBool(result: number, op: 0 | 1 | 2 | 3): boolean;
    static __compare(x: any, y: any, op: 0 | 1 | 2 | 3): boolean;
    __clzmsd(): number;
    static __absoluteAdd(x: JSBI, y: JSBI, resultSign: boolean): JSBI;
    static __absoluteSub(x: JSBI, y: JSBI, resultSign: boolean): JSBI;
    static __absoluteAddOne(x: JSBI, sign: boolean, result?: JSBI | null): JSBI;
    static __absoluteSubOne(x: JSBI, resultLength?: number): JSBI;
    static __absoluteAnd(x: JSBI, y: JSBI, result?: JSBI | null): JSBI;
    static __absoluteAndNot(x: JSBI, y: JSBI, result?: JSBI | null): JSBI;
    static __absoluteOr(x: JSBI, y: JSBI, result?: JSBI | null): JSBI;
    static __absoluteXor(x: JSBI, y: JSBI, result?: JSBI | null): JSBI;
    static __absoluteCompare(x: JSBI, y: JSBI): number;
    static __multiplyAccumulate(multiplicand: JSBI, multiplier: number, accumulator: JSBI, accumulatorIndex: number): void;
    static __internalMultiplyAdd(source: JSBI, factor: number, summand: number, n: number, result: JSBI): void;
    __inplaceMultiplyAdd(multiplier: number, summand: number, length: number): void;
    static __absoluteDivSmall(x: JSBI, divisor: number, quotient?: JSBI | null): JSBI;
    static __absoluteModSmall(x: JSBI, divisor: number): number;
    static __absoluteDivLarge(dividend: JSBI, divisor: JSBI, wantQuotient: false, wantRemainder: false): undefined;
    static __absoluteDivLarge(dividend: JSBI, divisor: JSBI, wantQuotient: true, wantRemainder: true): {
        quotient: JSBI;
        remainder: JSBI;
    };
    static __absoluteDivLarge(dividend: JSBI, divisor: JSBI, wantQuotient: boolean, wantRemainder: boolean): JSBI;
    static __clz15(value: number): number;
    __inplaceAdd(summand: JSBI, startIndex: number, halfDigits: number): number;
    __inplaceSub(subtrahend: JSBI, startIndex: number, halfDigits: number): number;
    __inplaceRightShift(shift: number): void;
    static __specialLeftShift(x: JSBI, shift: number, addDigit: 0 | 1): JSBI;
    static __leftShiftByAbsolute(x: JSBI, y: JSBI): JSBI;
    static __rightShiftByAbsolute(x: JSBI, y: JSBI): JSBI;
    static __rightShiftByMaximum(sign: boolean): JSBI;
    static __toShiftAmount(x: JSBI): number;
    static __toPrimitive(obj: any, hint?: string): any;
    static __toNumeric(value: unknown): number | JSBI;
    static __isBigInt(value: unknown): value is JSBI;
    static __truncateToNBits(n: number, x: JSBI): JSBI;
    static __truncateAndSubFromPowerOfTwo(n: number, x: JSBI, resultSign: boolean): JSBI;
    __digit(i: number): number;
    __unsignedDigit(i: number): number;
    __setDigit(i: number, digit: number): void;
    __setDigitGrow(i: number, digit: number): void;
    __halfDigitLength(): number;
    __halfDigit(i: number): number;
    __setHalfDigit(i: number, value: number): void;
    static __digitPow(base: number, exponent: number): number;
    static __kMaxLength: number;
    static __kMaxLengthBits: number;
    static __kMaxBitsPerChar: number[];
    static __kBitsPerCharTableShift: number;
    static __kBitsPerCharTableMultiplier: number;
    static __kConversionChars: string[];
    static __kBitConversionBuffer: ArrayBuffer;
    static __kBitConversionDouble: Float64Array;
    static __kBitConversionInts: Int32Array;
    static __clz30: (x: number) => number;
    static __imul: (x: number, y: number) => number;
    static __isOneDigitInt(x: number): boolean; /**/
}/**/

 /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
/****\ --- just ignore this crap:
/// /// <reference path="../types.d.ts" />
const knull= null as null_t_;
///export const _2upby31less1= (1<<31)*2.0-1>>>0;
///import globje from './required.js'; // TODO?= FIX with notional type or s/t
///export default JSBI; // I may yet remove/replace this; this isn't really the right place to pick a module flavor.  So don't rely on it.
//const JSBI_= globje['JSBI'] as JSBI; // TODO?= poll for globje['JSBI']
 \**/

 /**\
const //set_timeout(0)(()=>{ //var globj= undefined;
 globje= ( ()=>{} ).constructor('return this;')();
 const jsbi__= typeof globje['JSBI'];
 const jsbi_= jsbi__==='undefined'? "": "JSBI " + jsbi__;
 globje['JSBI']= JSBI; // console.log("Added " + typeof (globje['JSBI']= JSBI));
 const jsbi= "JSBI " + typeof globje['JSBI'];
 console.log((jsbi===jsbi_? "Already have ": "Loaded " + (!jsbi_? "": jsbi + " over ")) + (!jsbi_? jsbi: jsbi_));
//});
  **
  **
 \**/ // NB: sincere apologies for some rather iffy demodularization at this early stage of the project

//NML11th_DLSign_globje['JSBI']= JSBI_dbl;
//NML11th_DLSign_globje['JSBI']= JSBI_gcl;
//NML11th_DLSign_globje['JSBI']= JSBI_ntv;

;((()=>{

//const set_timeout= (ms)=>(fn, ...args)=>setTimeout(fn, ms, ...args);
//setTimeout(()=>{ console.log("0o" + JSBI.BigInt('4242').toString(8)); }, 9999); // waits ten secs and prints 0o10222
//setTimeout(()=>{ console.log("DS"+JSBI.unaryMinus(JSBI.BigInt('4242')).toString(8)); }, 4999);
;console.log("DS-"+JSBI.add(JSBI.BigInt(false), JSBI.BigInt('4242')).toString(8));
const sbz= ('-').charCodeAt(0) - JSBI.subtract(JSBI.BigInt(0), JSBI.BigInt('0b101')).toString().charCodeAt(0);
if (!sbz) {} else throw " :-( @"+329+": !!"+sbz;

//const set_timeout= (ms: number)=>(fn: TimerHandler, ...args)=>setTimeout(fn, ms, ...args);
;const set_timeout= (ms :number
                )=>(fn :(d :any)=>any, ...args :any[]
                )=>setTimeout(fn, ms, ...args);

;set_timeout(0)(()=>{ //console.log("10222 === " + (JSBI.BigInt(4242)).toString(8));
  const max= JSBI.BigInt(Number.MAX_SAFE_INTEGER);
  console.log(String(max) + " === 0x" + max.toString(16)); // → '9007199254740991'
  const two= JSBI.BigInt('2'), result= JSBI.add(two, max);
  console.log(String(result) + " === 0x" + result.toString(16)); // → '9007199254740993'
});
    
})());

;/**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/

;type bignat_t= JSBI; // MAYBE= ;type bignat_meta= typeof JSBI;
const JSBI_= NML11th_DLSign_globje['JSBI'] || JSBI; // MAYBE= const bignat_vtbl= JSBI;

const BigNat4str= (s :string)=>JSBI_.BigInt(s);
const BigNat4num= (n :number|boolean)=>JSBI_.BigInt(n);

//const _146= {} as it_t_; type vrfy_t__= typeof _146.vrfy;
;type signer_vrfy_t_= (y: string, e: string, s: string) => string;

//async function _147(it :string) { return it; } ;type hasher_afn_t__= typeof _147;
;type hasher_afn_t_= (_ :string) => Promise<string>;

;interface draysigner_t_ { __ :string; globje :object; 'JSBI': typeof JSBI;
  key_r: (str :string) => string;
  key_u: (r :string) => string;
  sign_k: (str :string) => string;
  sign_gk: (k :string) => string;
  sign: (r :string
   ) => (k :string, e :string) => string;
  vrfy: (y :string, e :string, s :string) => string;
  verify: (verifier :signer_vrfy_t_, hasher :hasher_afn_t_
      ) => (pubkey: string
      ) => (message: string, evidence: string, signature: string
      ) => Promise<boolean>;
};

;interface draysigner_t__ { __ :string; globje :object; 'JSBI': typeof JSBI;
  key_r?: (str :string) => string;
  key_u?: (r :string) => string;
  sign_k?: (str :string) => string;
  sign_gk?: (k :string) => string;
  sign?: (r :string
    ) => (k :string, e :string) => string;
  vrfy?: (y :string, e :string, s :string) => string;
  verify?: (verifier :signer_vrfy_t_, hasher :hasher_afn_t_
      ) => (pubkey: string
      ) => (message: string, evidence: string, signature: string
      ) => Promise<boolean>;
};

;const NML11th_DLSign_ :draysigner_t__[]= [ { __: 'NML11th_DLSign',
  'globje': NML11th_DLSign_globje, 'JSBI': NML11th_DLSign_globje['JSBI'], } ];

;NML11th_DLSign_populate(NML11th_DLSign_); // see next
NML11th_DLSign_globje['NML11th_DLSign']= NML11th_DLSign_[0];
///export default cgwvaPfG[0] as draysigner_t_; // a temporary name, obviously

;/**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/

;function NML11th_DLSign_populate(it: draysigner_t__[]) {{

/**
const p321a= '100000000000000000000000000000000000004ac158f960042437cb88fd5777e8d51b9865bc460fb';
const p2048a= 'fffffffffffffffffffffffffffffffffffffffffb7f960042437cb88fd5777e8d51b9865bae8c8c803d489505f652dd7c91114973ee1e5808d33d3c724fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdaa729d8a9ef16a21e0280c694448de2b479821307b326ae680c8fea9de59741bb952f21933c38461e1299245d93632f1497f59491e774369a4809fa6141421e87f01fbd5470afbebaa721466bf5247400f27c22b72394ba5fcb91cad3919a171d94646818eb2638d570f9de2cdec4eda0040403fbdcf7c797ef8a1115f6bd03f38153ec8350e49b126b86570fdd46720984a883346734b365b81a5dce7b245d';
const p1554a= '3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6a9ca762a7bc5a88780a031a5112378ad1e6084c1c2c1dcfe01ee7566f618de204ebac1b49b0fe935fdc5e8a0a75560022b282c268f7ca1c90ccd59a8337fa35c6e740738b8c0ce15d96b834aafc4f1910715d41c7d027cc1f096d8c7e9cc19e888b';
/*/
const p321a= '2327';
const p2048a= '5A7D651'; // 2326ffffb9b3 (?)
const p1554a= '293'; /**/

const tox= (big :bignat_t)=>big.toString(16);
const frox= (hex :string)=>BigNat4str("0x" + hex);

const q1= frox(p321a); // BigNat4str("0x" + p321a);
console.log("" + tox(q1) + " === ...4ac158f960042437cb88fd5777e8d51b9865bc460fb");
const p1= frox(p2048a); // BigNat4str("0x" + p2048a);
const p0= frox(p1554a);

//const BigNat_= (n :number)=>BigNat4str(n.toString());
const upby_= (by :bignat_t)=>(n :bignat_t)=>JSBI_.leftShift(n, by);
const dnby_= (by :bignat_t)=>(n :bignat_t)=>JSBI_.signedRightShift(n, by);
const sub_= (y :bignat_t)=>(x :bignat_t)=>JSBI_.subtract(x, y);

const l= BigNat4num(true), o= dnby_(l)(l), z= upby_(l)(l);
const c1= z; // NB: dubious hardcoding
const q_c= sub_(c1)(q1);

const add_= (y :bignat_t)=>(x :bignat_t)=>JSBI_.add(x, y);
const inc= add_(l);
const dec= sub_(l); // inessential

const mul_= (y :bignat_t)=>(x :bignat_t)=>JSBI_.multiply(x, y);
const div_= (y :bignat_t)=>(x :bignat_t)=>JSBI_.divide(x, y); // inessential
const mod_= (y :bignat_t)=>(x :bignat_t)=>JSBI_.remainder(x, y);
//const mad__= (m :bignat_t)=>(y :bignat_t)=>(x :bignat_t)=>JSBI_.remainder(JSBI_.add(x, y), m);

if (!!!!!!JSBI_.toNumber(o)) {} else
((()=>{
  const p__= div_(z)(p1);
  const r_= div_(q1)(p__);
  const r= div_(p0)(r_);
  const r__= add_(r)(r);
  const qp0= mul_(p0)(q1);
  const diff= sub_(mul_(r__)(qp0))(p1);
  console.log(""+diff.toString()+" r="+r.toString()+" ("+r.toString(2).length+" bits) == 0x"+r.toString(16));
})());

const eq_= (y :bignat_t)=>(x :bignat_t)=>JSBI_.equal(x, y);
const le_= (y :bignat_t)=>(x :bignat_t)=>!JSBI_.greaterThan(x, y);
const zero= (x :bignat_t)=>eq_(o)(x);
const one= (x :bignat_t)=>eq_(l)(x);

const band_= (y :bignat_t)=>(x :bignat_t)=>JSBI_.bitwiseAnd(x, y);
//const bior_= (y)=>(x)=>JSBI_.bitwiseOr(x, y);

const mulmod_= (m :bignat_t)=>{ // const mulmod_= (m)=>(y)=>(x)=>mod_(m)(mul_(y)(x));
  const f= mod_(m);
  return (y ?:bignat_t
      )=>(y? ( (x :bignat_t)=>f(mul_(y)(x)) ): ( (x :bignat_t)=>f(mul_(x)(x)) ));
}
const _221= mulmod_(o); type mulmod__t_= typeof _221; // TODO= BETTER(?)

const powmod__= (mm_: mulmod__t_
             )=>(y :bignat_t
             )=>(x :bignat_t)=>{ // TODO= (x :string)
  let b= l, q= l;
  if (le_(y)(b)) {} else return q;

  for (;;) {
    if (zero(band_(y)(b))) {} else q= mm_(x)(q);
    b= upby_(l)(b);
    if (le_(y)(b)) {} else return q;
    x= mm_()(x);
  }
}
const powmod_= (m :bignat_t)=>{
  const mm_= mulmod_(m);
  return powmod__(mm_);
}

const pump1= powmod_(p1);
const generator= (p :bignat_t, pm_ :typeof pump1, q :bignat_t
                )=>(limit: number
                )=>{
  const k= div_(q)(dec(p));
  const pm= pm_(k);

  const f= (r :number)=>
           pm(BigNat4num(r));
  let rv= f(2);
  let i= 1;
  while (one(rv) && (i+= 2)<=limit) rv= f(i);

  if (i<=limit) {} else throw " :-( @"+487; // This ought to be highly improbable, so failure surely implies a mistake
  return rv;
}
const gen1= generator(p1, pump1, q1)

//const D= (it :string)=>BigNat("00"+it.trim());
const B= (it: string)=>BigNat4str("0b"+it.trim());
const O= (it: string)=>BigNat4str("0o"+it.trim());
const X= (it: string)=>BigNat4str("0x"+it.trim());

//function identity__(x: any) { return x; }; type id_t__= typeof identity__; // TODO= BETTER
//function identity_ <Type> ( arg :Type ) :Type { return arg; } // TODO= LEARN
const identity_= function <Type> ( arg :Type ) :Type { return arg; } // TODO= LEARN
;type id_t_= typeof identity_;

const prepkey= (post :id_t_)=>(radix= 10)=>{
  const it= (pre :string
         )=>(str :string)=>post(BigNat4str(""+pre+str)).toString(2);
  if (radix % 10) {} else if (radix===10) return it(""); else throw " :-( @"+114;
  
  const l= Math.floor(Math.log(radix)/Math.log(2)+0.5);
  const s= "0" + ' b ox'.charAt(l) + " ";
  if (1<<l===radix && s.charCodeAt(1)!==32) {} else throw " :-( @"+118;
  return it(s.trim());
}
const pubkey= (radix= 8
           )=>(p :bignat_t, q :bignat_t, g :bignat_t
           )=>(r :string)=>powmod_(p)(sub_(B(r))(q))(g).toString(radix);

const g1= gen1(7); // let's be lucky?!?
console.log(String(g1) + " == 0x" + g1.toString(16));
if (!one(g1)) {} else throw " :-( @"+78; // These two tests are a sound (if incomplete) check of the scheme params
const g2q= pump1(q1)(g1);
console.log(String(g2q) + " == 0x" + g2q.toString(16));
if (one(g2q)) {} else throw " :-( @"+81; // These two tests are a sound (if incomplete) check of the scheme params

const qc1= ( (k :bignat_t
          )=>((inc( mod_(q_c)(k) )) as bignat_t) ) as id_t_; // TODO= LEARN precedence
it[0].key_r= prepkey(qc1)();
it[0].key_u= pubkey()(p1, q1, g1);
//const R= prepkey(qc1); const U= it.key_u;
//console.log(""+tox(R(16)('101'))+" "+tox(R(10)('101'))+" "+tox(R(8)('101'))+" "+tox(R(2)('101')));
//console.log(""+tox(U(R(2)('101'))));
//console.log(""+tox(U(R(4)('101'))));

it[0].sign_k= it[0].key_r; // k= H() % q_c + l;

const sign_gk= (radix= 32
            )=>(k :string
            )=>(pump1(B(k))(g1)).toString(radix); // gk= pm(g, k, p).toString(32);
it[0].sign_gk= sign_gk(); // e= H(gk...)

const sign= (radix= 16
         )=>(q :bignat_t
         )=>(r :string
         )=>(k :string, e :string
         )=>mod_(q)(add_(B(k))(mul_(B(r))(X(e)))).toString(radix); // s= (e * x + k) % q;
it[0].sign= sign()(q1);

const yegs= (radix= 32
         )=>(p :bignat_t, g :bignat_t)=>{
  const mm_= mulmod_(p); // const pm_= powmod_(p);
  return (y :string, e :string, s :string
      )=>mm_(pump1(X(s))(g))(pump1(X(e))(O(y))).toString(radix); // pm(y, e, p) * pm(g, s, p) % p;
}
it[0].vrfy= yegs()(p1, g1);

// it.$_q1= q1; it.mul_= mul_; // debugging only

 // Asynchronous verification
function verify(verifier :signer_vrfy_t_, hasher :hasher_afn_t_) {
  return (pubkey :string
    ) => async (message :string, evidence :string, signature :string
    ) => (evidence
      === await hasher(""+verifier(pubkey, evidence, signature)+message));
}

it[0].verify= verify;

}/**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
}/**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/

;setTimeout((async ()=>{{

  const it= NML11th_DLSign_[0] as draysigner_t_;

  const h1_= ('355'); const h2_= ('113'); const h3_= ('666');

  const x= it.key_r(h1_); console.log("x= " + x);
  const y= it.key_u(x); console.log("y= " + y);
  const k= it.sign_k(h2_); console.log("k= " + k);
  const gk= it.sign_gk(k); console.log("gk= " + gk);

  const e= h3_;
  const s= it.sign(x)(k, e); console.log("s= " + s);
  const v= it.vrfy(y, e, s); console.log("v= " + v);
  const b= await it.verify(it.vrfy, async (_ :string
                                       )=>(h3_))(y)("", e, s); console.log("b= " + b);
}}), 99);

 /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/

;const ___cgwvaPfG :string= NaN; ___cgwvaPfG; // Provoke the playground into reporting unused variables (!)

