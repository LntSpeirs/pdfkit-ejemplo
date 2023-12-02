import express from "express";
import rutas from "./routes/index.js";

const app = express();
app.use(rutas);
const PUERTO = 3000;

app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
