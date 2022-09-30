function validarForm() {
    let validationEmail: string = validarEmail();
    let validationServicio: string = validarServicio();
    let validationFecha: string = validarFecha();
    let validationCheckBox: string = validarCheckBox();
    let validacion: boolean = printErrors(validationEmail, validationServicio, validationFecha, validationCheckBox);

    var contenedor = document.getElementById("contRes");
    if (validacion) {
        contenedor.innerHTML = "";
        let p = document.createElement("h4");
        p.appendChild(document.createTextNode("Procesando la cita..."));
        contenedor.appendChild(p);
        contenedor.style.display = "block";
        var contenedorErr = document.getElementById("contError");
        contenedorErr.style.display = "none";
    } else {
        contenedor.style.display = "none";
        var contenedorErr = document.getElementById("contError");
        contenedorErr.style.display = "block";
    }
}

function printErrors(validationEmail: string, validationServicio: string, validationFecha: string, validationCheckBox:string): boolean {
    let vali: boolean = true;
    var contenedor = document.getElementById("contError");
    contenedor.innerHTML = "";
    if (validationEmail != null) {
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(validationEmail));
        contenedor.appendChild(p);
        contenedor.style.display = "block";
        vali = false;
    }
    if (validationServicio != null) {
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(validationServicio));
        contenedor.appendChild(p);
        contenedor.style.display = "block";
        vali = false;
    }
    if (validationFecha != null) {
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(validationFecha));
        contenedor.appendChild(p);
        contenedor.style.display = "block";
        vali = false;
    }
    if (validationCheckBox != null) {
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(validationCheckBox));
        contenedor.appendChild(p);
        contenedor.style.display = "block";
        vali = false;
    }
    return vali;
}

function validarEmail(): string {
    let email = document.getElementById("emailform") as HTMLInputElement;
    if (email.value != "") {
        let emailS: string = email.value;
        if (emailS.indexOf("@")!=-1) {
            return null;
        } else {
            return "Ha introducido un email inválido";
        }
    }
    return "No ha introducido una email";
    
}

function validarServicio() {
    let serv = document.getElementById("comboMasajes") as HTMLInputElement;

    if (serv.value != "mal") {
        return null;
    } else {
        return "No ha introducido un servicio";
    }
}


function validarFecha() {
    let fecha = document.getElementById("start") as HTMLInputElement;

    if (fecha != null) {
        let fechaInputTrozos: string[] = fecha.value.split("-");
        let fechaInput:Date = new Date(parseInt(fechaInputTrozos[0]), (parseInt(fechaInputTrozos[1])-1), parseInt(fechaInputTrozos[2]));

        let today: Date = new Date();
        let dateMin: Date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        let dateMax: Date = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());

        if (fechaInput > dateMin && fechaInput < dateMax) {
            return null;
        } else {
            return "Ha introducido una fecha inválida";
        }
    }
    return "No ha introducido una fecha";
}

function validarCheckBox() {
    let male = document.getElementById("male") as HTMLInputElement;
    let female = document.getElementById("female") as HTMLInputElement;
    if (male.checked||female.checked) {
        return null;
    } else {
        return "No ha introducido su sexo";
    }
}

function myFunction() {
    let contenedor = document.getElementById("contError");
    contenedor.style.display = "none";
}