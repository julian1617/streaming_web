//mostrar los formularios

function mostrar_ocultar(formularioId) {
    const formularios = ['nuevo', 'clientes', 'cuentas'];
    
    // Ocultar todos los formularios
    formularios.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });

    // Mostrar el formulario seleccionado
    document.getElementById(formularioId).style.display = 'block';
}