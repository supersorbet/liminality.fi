// Compiled with JS++ v.0.10.0

!function() {
    var f = (Object.hasOwnProperty('create')) ? Object.create : function(p) {
        function f() {}
        f.prototype = p;
        return new f();
    }
    ;
    var g = {
        h: 'System.Date?',
        m: true,
        p: function(q) {
            return (!!(q instanceof System.Date));
        },
        u: function(w) {
            if (w == null) {
                return ('null');
            }
            return (z.call(w) + '');
        },
        B: [],
        C: function() {
            return (g);
        }
    };
    var D = {
        h: 'System.Date',
        m: false,
        p: function(F) {
            return (!!(F instanceof System.Date));
        },
        u: function(G) {
            return (z.call(G) + '');
        },
        B: [],
        C: function() {
            return (g);
        }
    };
    function H(I, J) {
        I = I + '';
        J = J | 0;
        return (J >= 0 && J < I.length ? I.charCodeAt(J) & 65535 : void 0);
    }
    var System;
    System = {};
    System.Exceptions = {};
    System.Exception = function(message, K) {
        this.mMessage = '';
        message = message + '';
        K = K + '';
        this.mMessage = message + '';
        this.stack = K;
    }
    ;
    System.Exception.prototype.L = "System.Exception";
    System.Exception.prototype.getMessage = M;
    function M() {
        return (this.mMessage + '');
    }
    System.Exception.prototype.toString = N;
    function N() {
        return (this.L + ': ' + M.call(this));
    }
    System.Exceptions.InvalidURIException = function(message, P) {
        System.Exception.call(this, message, P);
        message = message + '';
        P = P + '';
    }
    ;
    System.Exceptions.InvalidURIException.prototype = f(System.Exception.prototype);
    System.Exceptions.InvalidURIException.prototype.L = "System.Exceptions.InvalidURIException";
    System.Error = function(Q) {
        this.mMessage = '';
        Q = Q + '';
        this.mMessage = "";
        this.stack = Q;
    }
    ;
    System.Error.prototype.L = "System.Error";
    System.Error.prototype.toString = R;
    function R() {
        return (this.L + ': ' + M.call(this));
    }
    System.Date = function() {
        this.mDate = void 0;
        this.mDate = new Date();
    }
    ;
    System.Date.prototype.L = "System.Date";
    System.Date.prototype.toString = z;
    function z() {
        var week = S.call(this) + '';
        var month = U.call(this) + '';
        var V = this.mDate.getDate() | 0;
        var W = (V < 10 ? '0' + V : V + '') + '';
        var day = W + '';
        var X = this.mDate.getFullYear() | 0;
        var Y = X + '';
        var yeah = Y + '';
        var Z = this.mDate.getHours() | 0;
        var aa = (Z < 10 ? '0' + Z : Z + '') + '';
        var hour = aa + '';
        var ab = this.mDate.getMinutes() | 0;
        var ac = (ab < 10 ? '0' + ab : ab + '') + '';
        var min = ac + '';
        var ad = this.mDate.getSeconds() | 0;
        var ae = (ad < 10 ? '0' + ad : ad + '') + '';
        var sec = ae + '';
        var offset = af.call(this) + '';
        return (week + ' ' + month + ' ' + day + ' ' + yeah + ' ' + hour + ':' + min + ':' + sec + ' UTC' + offset + '');
    }
    function af() {
        var rawOffsetWithSign = this.mDate.getTimezoneOffset() | 0;
        var sign = (rawOffsetWithSign > 0 ? "-" : "+") + '';
        var rawOffset = Math.abs(rawOffsetWithSign) | 0;
        var ag = rawOffset | 0;
        var ah = +(ag / 60);
        var ai = +Math.floor(ah);
        var aj = ai | 0;
        var ak = (aj < 10 ? '0' + aj : aj + '') + '';
        var hours = ak + '';
        var al = rawOffset | 0;
        var am = al % 60 | 0;
        var an = (am < 10 ? '0' + am : am + '') + '';
        var minutes = an + '';
        return (sign + hours + minutes + '');
    }
    function S() {
        switch (this.mDate.getDay() | 0) {
        case 0:
            return ('Sun');
        case 1:
            return ('Mon');
        case 2:
            return ('Tue');
        case 3:
            return ('Wed');
        case 4:
            return ('Thu');
        case 5:
            return ('Fri');
        case 6:
            return ('Sat');
        default:
            return ('');
        }
    }
    function U() {
        switch (this.mDate.getMonth() | 0) {
        case 0:
            return ('Jan');
        case 1:
            return ('Feb');
        case 2:
            return ('Mar');
        case 3:
            return ('Apr');
        case 4:
            return ('May');
        case 5:
            return ('Jun');
        case 6:
            return ('Jul');
        case 7:
            return ('Aug');
        case 8:
            return ('Sep');
        case 9:
            return ('Oct');
        case 10:
            return ('Nov');
        case 11:
            return ('Dec');
        default:
            return ('');
        }
    }
    var Sily;
    Sily = {};
    Sily.WebStorage = {
        setCookie: function(cname, cvalue, exdays) {
            cname = cname + '';
            cvalue = cvalue + '';
            exdays = exdays | 0;
            var d = new System.Date();
            +d.mDate.setTime(+d.mDate.getTime() + exdays * 24 * 60 * 60 * 1000);
            var expires = "expires=" + (z.call(d) + '') + '';
            document.cookie = cname + "=" + cvalue + "\;" + expires + "\;path=/";
        },
        getCookie: function(cname) {
            cname = cname + '';
            var name = cname + '=';
            var ao = document.cookie;
            var ap = ao != null ? ao + '' : '';
            var aq = System.Encoding.URI.decodeURIComponent(ap) + '';
            var decodedCookie = aq + '';
            var ca = decodedCookie.split("\;");
            var ar = ca;
            for (var i = 0; i < (ar.length | 0); ++i) {
                var as = ca;
                var at = i | 0;
                var au = as[at];
                var av = (au != null ? au : "") + '';
                var c = av + '';
                while (H(c, 0) == 32) {
                    c = c.substring(1) + '';
                }
                if ((c.indexOf(name) | 0) == 0) {
                    var aw = c + '';
                    var ax = name + '';
                    var ay = ax.length | 0;
                    var az = c + '';
                    var aA = az.length | 0;
                    var aB = aw.substring(ay, aA) + '';
                    return (aB + '');
                }
            }
            return ('');
        },
        getOrInitCookie: function(cname, cdef) {
            cname = cname + '';
            var c = Sily.WebStorage.getCookie(cname) + '';
            if (c == "") {
                c = cdef != null ? cdef + '' : '';
                Sily.WebStorage.setCookie(cname, c, 365);
            }
            return (c + '');
        }
    };
    System.Encoding = {};
    System.Encoding.URI = {
        decodeURIComponent: function(uriComponent) {
            uriComponent = uriComponent + '';
            try {
                return (decodeURIComponent(uriComponent));
            } catch (aC) {
                if (!(aC instanceof System.Exception || aC instanceof System.Error)) {
                    var aD = aC;
                    var aE = aD.message;
                    var aF = aE != null ? aE + '' : '';
                    throw (new System.Exceptions.InvalidURIException(aF,new Error().stack));
                } else {
                    throw (aC);
                }
            }
        }
    };
    !function() {
        var bootsnd = document.getElementById("snd-boot");
        var loadsnd = document.getElementById("snd-loaded");
        var doBoot = Sily.WebStorage.getOrInitCookie("doBoot", "0");
        if (doBoot == "1") {
            $('#loader').show();
            bootsnd.volume = 0.5;
            loadsnd.volume = 0.5;
            bootsnd.play();
            setTimeout((function() {
                var aG = function() {
                    $('#loader').hide();
                    loadsnd.play();
                };
                var aH = aG.call(this);
                aH = aH;
                return (aH);
            }
            ), 1000 * 6);
        }
    }();
}();
