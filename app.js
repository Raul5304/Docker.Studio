const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir archivos estáticos como JS, CSS, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Servir el archivo index.html en la ruta raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});