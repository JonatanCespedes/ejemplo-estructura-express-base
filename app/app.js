const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

/* HOME */
app.get("/", (req, res) => {
   return res.sendFile(path.join(__dirname, "/views/home.html"));
})

/* CARRITO */
app.get("/carrito", (req, res) => {
   return res.sendFile(path.join(__dirname, "/views/carrito.html"));
})
/* DETALLE */
app.get("/detalle", (req, res) => {
   return res.sendFile(path.join(__dirname, "/views/detalle.html"));
})

app.listen(PORT, () => console.log(`
Server listen in port ${PORT}
http://localhost:${PORT}
`))