function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
function validarForm(){
    const username = document.getElementById("usuario").value;
    const password = document.getElementById("contraseña").value;
    // Revisa que los campos no estan vacios
    if (username === "" || password === "") {
        //Mostrar el error
        showAlertError();
    } else {
        // No se si index_2 es la portada así que le voy a dejar un nombre autodescriptivo
        showAlertSuccess();
        setTimeout(() => {
            window.location.href = "portada.html";
        }, 10000); 
        //10000 hace que espere 10 segundos así ve el alertsuccess sino lo saco 
        // Lo de windows location etc en lugar de href lo obtuve del punto 4 de la entrega
    }
}