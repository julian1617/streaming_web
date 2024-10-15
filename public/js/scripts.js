// FUNCION PARA CREAR NUEVA VENTA 
async function registrarVenta() {
    const venta = {
        Whatsapp: document.getElementById('CELULARWHATSAPP').value,
        Nombre_Cliente: document.getElementById('NOMBRECLIENTE').value,
        Tipo_Cuenta: document.getElementById('TIPODECUENTA').value,
        Cuenta: document.getElementById('EMAILCUENTA').value,
        Clave_Cuenta: document.getElementById('CLAVECUENTA').value,
        Fecha_Inicio: document.getElementById('FECHAINICIO').value,
        Fecha_Fin: document.getElementById('FECHAFIN').value,
    };

    try {
        const response = await fetch('/crud/registrar', { // Ruta correcta
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ venta }), // Asegúrate de que el cuerpo sea correcto
        });

        const result = await response.json();

        if (result.success) {
            alert('Venta registrada exitosamente.');
            document.getElementById('formNuevaVenta').reset();
        } else {
            alert('Error al registrar la venta: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al registrar la venta.');
    }
}


//FUNCION PARA BUSCAR LOS CLIENTES
async function buscarCliente() {
    const whatsapp = document.getElementById('BUSCARWHATSAPP').value;

    if (!whatsapp) {
        alert('Por favor, ingresa un número de WhatsApp.');
        return;
    }

    try {
        const response = await fetch(`/public/php/crud.php?accion=buscar&whatsapp=${whatsapp}`);
        const data = await response.json();

        const resultadoDiv = document.getElementById('resultadoCliente');
        resultadoDiv.innerHTML = ''; // Limpiar resultados anteriores

        if (data.length > 0) {
            data.forEach(cliente => {
                resultadoDiv.innerHTML += `
                    <p><strong>Nombre:</strong> ${cliente.Nombre_Cliente}</p>
                    <p><strong>Tipo de Cuenta:</strong> ${cliente.Tipo_Cuenta}</p>
                    <p><strong>Cuenta:</strong> ${cliente.Cuenta}</p>
                    <p><strong>Fecha Inicio:</strong> ${cliente.Fecha_Inicio}</p>
                    <p><strong>Fecha Fin:</strong> ${cliente.Fecha_Fin}</p>
                    <hr>
                `;
            });
        } else {
            resultadoDiv.innerHTML = '<p>No se encontraron clientes con ese número de WhatsApp.</p>';
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al buscar el cliente.');
    }
}


