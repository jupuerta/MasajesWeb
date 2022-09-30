function validarForm() {
    var validationEmail = validarEmail();
    var validationServicio = validarServicio();
    var validationFecha = validarFecha();
    var validationCheckBox = validarCheckBox();
    var validacion = printErrors(validationEmail, validationServicio, validationFecha, validationCheckBox);
    var contenedor = document.getElementById("contRes");
    if (validacion) {
        contenedor.innerHTML = "";
        var p = document.createElement("h4");
        p.appendChild(document.createTextNode("Procesando la cita..."));
        contenedor.appendChild(p);
        contenedor.style.display = "block";
        var contenedorErr = document.getElementById("contError");
        contenedorErr.style.display = "none";
    }
    else {
        contenedor.style.display = "none";
        var contenedorErr = document.getElementById("contError");
        contenedorErr.style.display = "block";
    }
}
function printErrors(validationEmail, validationServicio, validationFecha, validationCheckBox) {
    var vali = true;
    var contenedor = document.getElementById("contError");
    contenedor.innerHTML = "";
    if (validationEmail != null) {
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(validationEmail));
        contenedor.appendChild(p);
        contenedor.style.display = "block";
        vali = false;
    }
    if (validationServicio != null) {
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(validationServicio));
        contenedor.appendChild(p);
        contenedor.style.display = "block";
        vali = false;
    }
    if (validationFecha != null) {
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(validationFecha));
        contenedor.appendChild(p);
        contenedor.style.display = "block";
        vali = false;
    }
    if (validationCheckBox != null) {
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(validationCheckBox));
        contenedor.appendChild(p);
        contenedor.style.display = "block";
        vali = false;
    }
    return vali;
}
function validarEmail() {
    var email = document.getElementById("emailform");
    if (email.value != "") {
        var emailS = email.value;
        if (emailS.indexOf("@") != -1) {
            return null;
        }
        else {
            return "Ha introducido un email inválido";
        }
    }
    return "No ha introducido una email";
}
function validarServicio() {
    var serv = document.getElementById("comboMasajes");
    if (serv.value != "mal") {
        return null;
    }
    else {
        return "No ha introducido un servicio";
    }
}
function validarFecha() {
    var fecha = document.getElementById("start");
    if (fecha != null) {
        var fechaInputTrozos = fecha.value.split("-");
        var fechaInput = new Date(parseInt(fechaInputTrozos[0]), (parseInt(fechaInputTrozos[1]) - 1), parseInt(fechaInputTrozos[2]));
        var today = new Date();
        var dateMin = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateMax = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
        if (fechaInput > dateMin && fechaInput < dateMax) {
            return null;
        }
        else {
            return "Ha introducido una fecha inválida";
        }
    }
    return "No ha introducido una fecha";
}
function validarCheckBox() {
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if (male.checked || female.checked) {
        return null;
    }
    else {
        return "No ha introducido su sexo";
    }
}
function myFunction() {
    var contenedor = document.getElementById("contError");
    contenedor.style.display = "none";
}
//# sourceMappingURL=file.js.map