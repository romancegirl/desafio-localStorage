document.getElementById('buttonText').addEventListener('click', function() {
    // Se obtiene el valor ingresado en el input
    const inputText = document.getElementById('inputText').value;
    
    // Guardamos ese valor en localStorage con una clave, por ejemplo "datoGuardado"
    localStorage.setItem('datoGuardado', inputText);
});
