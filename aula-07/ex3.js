function juntar() {
    var nome1 = document.getElementById("nome1").value;
    var nome2 = document.getElementById("nome2").value;
    var nomecompleto = "".concat(nome1, " ").concat(nome2);
    return alert("Nome completo: " + nomecompleto);
}
