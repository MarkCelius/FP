const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'front'
app.use(express.static(path.join(__dirname, 'front')));

// Ruta para servir sobre.html si no encuentra otro archivo
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'html', 'sobre.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
