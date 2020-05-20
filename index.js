
const turnos = require('./turnos.js');
const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/tp2ia", function (req, res) {
  let speech
  if (req.body.queryResult.intent.displayName === 'Consultar-Disponibilidad') {
    speech =
      req.body.queryResult &&
        req.body.queryResult.parameters &&
        req.body.queryResult.parameters.especialidad &&
        req.body.queryResult.parameters.fecha
        ? turnos.getHorariosLibres(req.body.queryResult.parameters.fecha, req.body.queryResult.parameters.especialidad)
        : "Seems like some problem. Speak again." + req.body;

  }
  if (req.body.queryResult.intent.displayName === 'Consultar-Disponibilidad.Reserva') {
    speech =
      req.body.queryResult &&
        req.body.queryResult.parameters &&
        req.body.queryResult.parameters.especialidad &&
        req.body.queryResult.parameters.fecha
        ? turnos.getHorariosLibres(req.body.queryResult.parameters.fecha, req.body.queryResult.parameters.especialidad)
        : "Seems like some problem. Speak again." + req.body;
  }


  return res.json({

    "fulfillmentText": speech,
    "fulfillmentMessages": [
      {
        "text": {
          "text": [speech]
        }
      }
    ],
    "source": "<webhookpn1>"


  });
});


restService.listen(process.env.PORT || 8000, function () {
  console.log("Server up and listening");
});
