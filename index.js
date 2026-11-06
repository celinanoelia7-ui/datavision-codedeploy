const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('<h1>¡Hola, DataVision Analytics! Despliegue automatizado exitoso.</h1>');
});

app.listen(port, () => {
  console.log(`App de DataVision ejecutándose en el puerto ${port}`);
});