const data = document.querySelector("#data")
const horario = document.querySelector("#horario")

function relogio(){
    let relogio = new Date();
    let horas = relogio.getHours();
    let minutos = relogio.getMinutes();
    let dia = relogio.getDate();
    let mes = relogio.getMonth();
    let ano = relogio.getFullYear();


    if(minutos<10){
        minutos = "0"+ minutos
    }

    if(horas<10){
        horas = "0"+ horas
    }

    if(dia<10){
        dia = "0"+ dia
    }

    if(mes<10){
        mes = "0"+ mes
    }

    let hor = horas + ":" + minutos;
    let dat = dia + "." + mes + "." + ano;


    horario.innerHTML = hor
    data.innerHTML = dat
}



const tempo = setInterval(relogio,10);