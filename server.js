const express = require("express");
const bodyParser = require("body-parser");

const response = require("./network/response");

const router = express.Router();

var app = express();

/* app.use("/", function (req, res) {
  res.send("Hola");
}); */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/message", function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Valor personalizado",
  });
  console.log(req.body);
  console.log(req.query);
  //res.send("Lista de mensajes");
  response.success(req, res, "Lista de Mensajes");
});

router.post("/message", function (req, res) {
  //res.send("Mensaje añadido");
  //res.status(201).send({ error: "", body: "Creado Correctamente" });
  if (req.query.error == "ok") {
    response.error(
      req,
      res,
      "Error Inesperado",
      500,
      "Es solo una simulación de los errores"
    );
  } else {
    response.success(req, res, "Creado Correctamente", 201);
  }
});

router.delete("/message", function (req, res) {
  console.log(req.query);
  res.status(201).send();
});

app.use("/app", express.static("public"));

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
