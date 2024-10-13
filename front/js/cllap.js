document.addEventListener("DOMContentLoaded", function() {
    var collapsible = document.querySelector(".collapsible");
    var content = document.querySelector(".content");

    collapsible.addEventListener("click", function() {
        if (content.style.display === "none") {
            content.style.display = "block";  
            collapsible.textContent = "Cerrar"; 
        } else {
            content.style.display = "none"; 
            collapsible.textContent = "Letra en la Carta";
        }
    });
});
