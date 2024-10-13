const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'front'
app.use(express.static(path.join(__dirname, 'front')));

// Ruta por defecto que servirá el archivo sobre.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'front/html/sobre.html'));
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
