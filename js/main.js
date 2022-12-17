let turno = 0;
const tablero = ["", "", "", "", "", "", "", "", ""];

const btnPulsado = (event, pos) => {
    turno++;
    const btn = event.target
    const color = turno % 2 ? 'orange' : 'green'
    
    btn.style.backgroundColor = color;
    tablero[pos] = color;
    {once:true }
    if (haGanado()) {
        window.location = "../pages/ganador.html"
    } 
   
}
 document.querySelectorAll('button').forEach((obj, i) => obj.addEventListener('click', (e) => btnPulsado(e, i)));

const haGanado = () => {
    if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
        return true;
    } else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) {
        return true;
    } else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]) {
        return true;
    } else if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]) {
        return true;
    } else if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]) {
        return true;
    } else if (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]) {
        return true;
    } else if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]) {
        return true;
    } else if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]) {
        return true;
    }
    return false;
}



const login = () => {
    let user1 = document.getElementById("user1").value;
    let user2 = document.getElementById("user2").value;

    if (user1 && user2) {
        sessionStorage.setItem("user1", user1);
        sessionStorage.setItem("user2", user2);

        window.open("../pages/tablero_info.html", "_self");

        document.getElementById("user1").value = "";
        document.getElementById("user2").value = "";
    }
    else {
        alert('Escribe los nombres')
    }
}