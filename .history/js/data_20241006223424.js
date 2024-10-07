// Obtenemos el valor guardado en localStorage con la clave "datoGuardado"
const storedData = localStorage.getItem('datoGuardado');

// Mostramos el dato en el span con id "data"
document.getElementById('data').textContent = storedData ? storedData : 'No hay datos guardados';
