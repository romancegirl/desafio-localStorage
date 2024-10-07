// Se obtiene el valor guardado en localStorage con la clave "datoGuardado" referenciada anteriormente
const storedData = localStorage.getItem('datoGuardado');

// Se muestra el dato en el span con id "data"
document.getElementById('data').textContent = storedData ? storedData : 'No hay datos guardados';
