document.addEventListener('DOMContentLoaded', () => {
    const rsvpButton = document.getElementById('rsvp-button');

    if (rsvpButton) {
        rsvpButton.addEventListener('click', () => {
            alert('¡Gracias por confirmar! Nos vemos en la boda.');
            // Aquí se podría añadir lógica para un formulario de confirmación más complejo.
        });
    }
});
