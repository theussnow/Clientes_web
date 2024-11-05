var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var obj1 = { nome: "Vitor", cidade: "Nova Friburgo" };
var obj2 = { cidade: "Miracema", gostosMusicais: ["rock"] };
var combinedObj = __assign(__assign({}, obj1), obj2);
// Resultado: { nome: "Vitor", cidade: "Miracema", gostosMusicais: ["rock"] }
console.log(combinedObj);
var ar = [1, 2, 3];
var arl = [4, 5, 6];
var juntos = __spreadArray(__spreadArray([], ar, true), arl, true);
console.log(juntos);
var pessoa = require('prompt-sync')();
var idade = pessoa("informe sua idade");
console.log(idade);
