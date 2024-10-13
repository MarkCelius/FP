$(document).ready(function() {
    $('.sello').on('click', function() {
        // Usamos SweetAlert2 con colores personalizados y estilo pixel
        Swal.fire({
            title: 'Introduce tu nombre',
            input: 'text',
            inputPlaceholder: 'Tu nombre',
            showCancelButton: true,
            confirmButtonText: 'Enviar',
            cancelButtonText: 'Cancelar',
            customClass: {
                popup: 'pixel-border',
                confirmButton: 'swal2-confirm',
                cancelButton: 'swal2-cancel',
                title: 'swal2-title',
                input: 'swal2-input'
            },
            inputValidator: (value) => {
                if (!value) {
                    return 'Por favor, ingresa tu nombre!';
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                let nombre = result.value;

                if (nombre.toLowerCase() === 'paul') {
                    // Cambiar la imagen del sobre por el banner
                    $('#frente').attr('src', '../img/banner.jpeg');
                    
                    // Ocultar el botón de voltear, el mensaje de cumpleaños, y el sello
                    $('#flip-btn').hide();
                    $('#hbd').hide();
                    $('.sello').hide();
                    
                    // Mostrar las imágenes
                    $('.imagen-container').show();
                } else {
                    // Usar SweetAlert2 para mostrar un mensaje de acceso denegado
                    Swal.fire({
                        icon: 'error',
                        title: 'Acceso denegado',
                        text: 'No puedes ingresar al contenido.',
                        customClass: {
                            popup: 'pixel-border',
                            confirmButton: 'swal2-confirm'
                        }
                    });
                }
            }
        });
    });



    $('.zoomable').on('click', function() {
        const imgSrc = $(this).attr('src');
        $('body').append(`
            <div class="fullscreen">
                <img src="${imgSrc}" alt="Imagen ampliada">
                <div id="back-btn">&#x21A9;</div> <!-- Botón para volver -->
            </div>
        `);

        $('#back-btn').on('click', function() {
            $('.fullscreen').remove(); 
        });
    });
});
