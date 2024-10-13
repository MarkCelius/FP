$(document).ready(function() {
    let flipped = false; // Controla si el sobre está volteado o no

    // Función del botón para voltear el sobre
    $('#flip-btn').on('click', function() {
        if (!flipped) {
            $('#frente').hide();
            $('#atras').show();
            $('.sello').hide(); 
        } else {
            $('#frente').show();
            $('#atras').hide();

            if ($('#frente').attr('src') === '../img/sobre-cerrado.jpeg') {
                $('.sello').show(); 
            }
        }
        flipped = !flipped;
    });
});
