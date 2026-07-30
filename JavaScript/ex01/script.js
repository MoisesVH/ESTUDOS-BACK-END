function caucularIMC () {
    let peso = parseInt(document.getElementById("peso").value);
    let m = parseInt(document.getElementById("metros").value);
    let cm = parseInt(document.getElementById("centimetros").value);
    let resImc = document.getElementById("IMC");
    let result = document.getElementById("resultado");
    let altura = m + cm/100;
    let imc = peso / altura**2;
    resImc.value = imc.toFixed(2);
    if (imc < 20) {
        result.value = "Abaixo do Peso";
    } else if (imc <= 25) {
        result.value = "Peso Ideal";
    } else if (imc <= 30) {
        result.value = "Sobrepeso";
    } else if (imc <= 35) {
        result.value = "Obesidade Moderada";
    } else if (imc <= 40) {
        result.value = "Obesidade Severa";
    } else if (imc <= 50) {
        result.value = "Obesidade Mórbida";
    } else {
        result.value = "Sobrepeso";
    };
};
