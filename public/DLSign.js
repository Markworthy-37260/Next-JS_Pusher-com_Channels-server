"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
const NML11th_DLSign_globje = (() => { }).constructor('return this;')();
;
(((je) => {
    je['JSBI'] =
        je['JSBI_native'] || je['JSBI_GCLabs'] || je['JSBI_floatOnly'];
})(NML11th_DLSign_globje));
// PREAMBULATORY CONTEXT - Copied here to compile in the TS playground
;
/**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
;
((() => {
    //const set_timeout= (ms)=>(fn, ...args)=>setTimeout(fn, ms, ...args);
    //setTimeout(()=>{ console.log("0o" + JSBI.BigInt('4242').toString(8)); }, 9999); // waits ten secs and prints 0o10222
    //setTimeout(()=>{ console.log("DS"+JSBI.unaryMinus(JSBI.BigInt('4242')).toString(8)); }, 4999);
    ;
    console.log("DS-" + JSBI.add(JSBI.BigInt(false), JSBI.BigInt('4242')).toString(8));
    const sbz = ('-').charCodeAt(0) - JSBI.subtract(JSBI.BigInt(0), JSBI.BigInt('0b101')).toString().charCodeAt(0);
    if (!sbz) { }
    else
        throw " :-( @" + 329 + ": !!" + sbz;
    //const set_timeout= (ms: number)=>(fn: TimerHandler, ...args)=>setTimeout(fn, ms, ...args);
    ;
    const set_timeout = (ms) => (fn, ...args) => setTimeout(fn, ms, ...args);
    ;
    set_timeout(0)(() => {
        const max = JSBI.BigInt(Number.MAX_SAFE_INTEGER);
        console.log(String(max) + " === 0x" + max.toString(16)); // → '9007199254740991'
        const two = JSBI.BigInt('2'), result = JSBI.add(two, max);
        console.log(String(result) + " === 0x" + result.toString(16)); // → '9007199254740993'
    });
})());
;
/**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
;
const JSBI_ = NML11th_DLSign_globje['JSBI'] || JSBI; // MAYBE= const bignat_vtbl= JSBI;
const BigNat4str = (s) => JSBI_.BigInt(s);
const BigNat4num = (n) => JSBI_.BigInt(n);
//const _146= {} as it_t_; type vrfy_t__= typeof _146.vrfy;
//async function _147(it :string) { return it; } ;type hasher_afn_t__= typeof _147;
;
const NML11th_DLSign_ = [{ __: 'NML11th_DLSign',
        'globje': NML11th_DLSign_globje, 'JSBI': NML11th_DLSign_globje['JSBI'], }];
;
NML11th_DLSign_populate(NML11th_DLSign_); // see next
NML11th_DLSign_globje['NML11th_DLSign'] = NML11th_DLSign_[0];
///export default cgwvaPfG[0] as draysigner_t_; // a temporary name, obviously
;
/**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
;
function NML11th_DLSign_populate(it) {
    {
        /**
        const p321a= '100000000000000000000000000000000000004ac158f960042437cb88fd5777e8d51b9865bc460fb';
        const p2048a= 'fffffffffffffffffffffffffffffffffffffffffb7f960042437cb88fd5777e8d51b9865bae8c8c803d489505f652dd7c91114973ee1e5808d33d3c724fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdaa729d8a9ef16a21e0280c694448de2b479821307b326ae680c8fea9de59741bb952f21933c38461e1299245d93632f1497f59491e774369a4809fa6141421e87f01fbd5470afbebaa721466bf5247400f27c22b72394ba5fcb91cad3919a171d94646818eb2638d570f9de2cdec4eda0040403fbdcf7c797ef8a1115f6bd03f38153ec8350e49b126b86570fdd46720984a883346734b365b81a5dce7b245d';
        const p1554a= '3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6a9ca762a7bc5a88780a031a5112378ad1e6084c1c2c1dcfe01ee7566f618de204ebac1b49b0fe935fdc5e8a0a75560022b282c268f7ca1c90ccd59a8337fa35c6e740738b8c0ce15d96b834aafc4f1910715d41c7d027cc1f096d8c7e9cc19e888b';
        /*/
        const p321a = '2327';
        const p2048a = '5A7D651'; // 2326ffffb9b3 (?)
        const p1554a = '293'; /**/
        const tox = (big) => big.toString(16);
        const frox = (hex) => BigNat4str("0x" + hex);
        const q1 = frox(p321a); // BigNat4str("0x" + p321a);
        console.log("" + tox(q1) + " === ...4ac158f960042437cb88fd5777e8d51b9865bc460fb");
        const p1 = frox(p2048a); // BigNat4str("0x" + p2048a);
        const p0 = frox(p1554a);
        //const BigNat_= (n :number)=>BigNat4str(n.toString());
        const upby_ = (by) => (n) => JSBI_.leftShift(n, by);
        const dnby_ = (by) => (n) => JSBI_.signedRightShift(n, by);
        const sub_ = (y) => (x) => JSBI_.subtract(x, y);
        const l = BigNat4num(true), o = dnby_(l)(l), z = upby_(l)(l);
        const c1 = z; // NB: dubious hardcoding
        const q_c = sub_(c1)(q1);
        const add_ = (y) => (x) => JSBI_.add(x, y);
        const inc = add_(l);
        const dec = sub_(l); // inessential
        const mul_ = (y) => (x) => JSBI_.multiply(x, y);
        const div_ = (y) => (x) => JSBI_.divide(x, y); // inessential
        const mod_ = (y) => (x) => JSBI_.remainder(x, y);
        //const mad__= (m :bignat_t)=>(y :bignat_t)=>(x :bignat_t)=>JSBI_.remainder(JSBI_.add(x, y), m);
        if (!!!!!!JSBI_.toNumber(o)) { }
        else
            ((() => {
                const p__ = div_(z)(p1);
                const r_ = div_(q1)(p__);
                const r = div_(p0)(r_);
                const r__ = add_(r)(r);
                const qp0 = mul_(p0)(q1);
                const diff = sub_(mul_(r__)(qp0))(p1);
                console.log("" + diff.toString() + " r=" + r.toString() + " (" + r.toString(2).length + " bits) == 0x" + r.toString(16));
            })());
        const eq_ = (y) => (x) => JSBI_.equal(x, y);
        const le_ = (y) => (x) => !JSBI_.greaterThan(x, y);
        const zero = (x) => eq_(o)(x);
        const one = (x) => eq_(l)(x);
        const band_ = (y) => (x) => JSBI_.bitwiseAnd(x, y);
        //const bior_= (y)=>(x)=>JSBI_.bitwiseOr(x, y);
        const mulmod_ = (m) => {
            const f = mod_(m);
            return (y) => (y ? ((x) => f(mul_(y)(x))) : ((x) => f(mul_(x)(x))));
        };
        const _221 = mulmod_(o);
        const powmod__ = (mm_) => (y) => (x) => {
            let b = l, q = l;
            if (le_(y)(b)) { }
            else
                return q;
            for (;;) {
                if (zero(band_(y)(b))) { }
                else
                    q = mm_(x)(q);
                b = upby_(l)(b);
                if (le_(y)(b)) { }
                else
                    return q;
                x = mm_()(x);
            }
        };
        const powmod_ = (m) => {
            const mm_ = mulmod_(m);
            return powmod__(mm_);
        };
        const pump1 = powmod_(p1);
        const generator = (p, pm_, q) => (limit) => {
            const k = div_(q)(dec(p));
            const pm = pm_(k);
            const f = (r) => pm(BigNat4num(r));
            let rv = f(2);
            let i = 1;
            while (one(rv) && (i += 2) <= limit)
                rv = f(i);
            if (i <= limit) { }
            else
                throw " :-( @" + 487; // This ought to be highly improbable, so failure surely implies a mistake
            return rv;
        };
        const gen1 = generator(p1, pump1, q1);
        //const D= (it :string)=>BigNat("00"+it.trim());
        const B = (it) => BigNat4str("0b" + it.trim());
        const O = (it) => BigNat4str("0o" + it.trim());
        const X = (it) => BigNat4str("0x" + it.trim());
        //function identity__(x: any) { return x; }; type id_t__= typeof identity__; // TODO= BETTER
        //function identity_ <Type> ( arg :Type ) :Type { return arg; } // TODO= LEARN
        const identity_ = function (arg) { return arg; } // TODO= LEARN
        ;
        const prepkey = (post) => (radix = 10) => {
            const it = (pre) => (str) => post(BigNat4str("" + pre + str)).toString(2);
            if (radix % 10) { }
            else if (radix === 10)
                return it("");
            else
                throw " :-( @" + 114;
            const l = Math.floor(Math.log(radix) / Math.log(2) + 0.5);
            const s = "0" + ' b ox'.charAt(l) + " ";
            if (1 << l === radix && s.charCodeAt(1) !== 32) { }
            else
                throw " :-( @" + 118;
            return it(s.trim());
        };
        const pubkey = (radix = 8) => (p, q, g) => (r) => powmod_(p)(sub_(B(r))(q))(g).toString(radix);
        const g1 = gen1(7); // let's be lucky?!?
        console.log(String(g1) + " == 0x" + g1.toString(16));
        if (!one(g1)) { }
        else
            throw " :-( @" + 78; // These two tests are a sound (if incomplete) check of the scheme params
        const g2q = pump1(q1)(g1);
        console.log(String(g2q) + " == 0x" + g2q.toString(16));
        if (one(g2q)) { }
        else
            throw " :-( @" + 81; // These two tests are a sound (if incomplete) check of the scheme params
        const qc1 = ((k) => (inc(mod_(q_c)(k)))); // TODO= LEARN precedence
        it[0].key_r = prepkey(qc1)();
        it[0].key_u = pubkey()(p1, q1, g1);
        //const R= prepkey(qc1); const U= it.key_u;
        //console.log(""+tox(R(16)('101'))+" "+tox(R(10)('101'))+" "+tox(R(8)('101'))+" "+tox(R(2)('101')));
        //console.log(""+tox(U(R(2)('101'))));
        //console.log(""+tox(U(R(4)('101'))));
        it[0].sign_k = it[0].key_r; // k= H() % q_c + l;
        const sign_gk = (radix = 32) => (k) => (pump1(B(k))(g1)).toString(radix); // gk= pm(g, k, p).toString(32);
        it[0].sign_gk = sign_gk(); // e= H(gk...)
        const sign = (radix = 16) => (q) => (r) => (k, e) => mod_(q)(add_(B(k))(mul_(B(r))(X(e)))).toString(radix); // s= (e * x + k) % q;
        it[0].sign = sign()(q1);
        const yegs = (radix = 32) => (p, g) => {
            const mm_ = mulmod_(p); // const pm_= powmod_(p);
            return (y, e, s) => mm_(pump1(X(s))(g))(pump1(X(e))(O(y))).toString(radix); // pm(y, e, p) * pm(g, s, p) % p;
        };
        it[0].vrfy = yegs()(p1, g1);
        // it.$_q1= q1; it.mul_= mul_; // debugging only
        // Asynchronous verification
        function verify(verifier, hasher) {
            return (pubkey) => (message, evidence, signature) => __awaiter(this, void 0, void 0, function* () {
                return (evidence
                    === (yield hasher("" + verifier(pubkey, evidence, signature) + message)));
            });
        }
        it[0].verify = verify;
        ;
    } /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
} /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
;
setTimeout((() => __awaiter(void 0, void 0, void 0, function* () {
    {
        const it = NML11th_DLSign_[0];
        const h1_ = ('355');
        const h2_ = ('113');
        const h3_ = ('666');
        const x = it.key_r(h1_);
        console.log("x= " + x);
        const y = it.key_u(x);
        console.log("y= " + y);
        const k = it.sign_k(h2_);
        console.log("k= " + k);
        const gk = it.sign_gk(k);
        console.log("gk= " + gk);
        const e = h3_;
        const s = it.sign(x)(k, e);
        console.log("s= " + s);
        const v = it.vrfy(y, e, s);
        console.log("v= " + v);
        const b = yield it.verify(it.vrfy, (_) => __awaiter(void 0, void 0, void 0, function* () { return (h3_); }))(y)("", e, s);
        console.log("b= " + b);
    }
})), 99);
;
/**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
;
const ___cgwvaPfG = NaN;
___cgwvaPfG; // Provoke the playground into reporting unused variables (!)

