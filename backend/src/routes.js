const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
  [Segments.BODY]:Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().length(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}) ,OngController.create);
routes.get('/ongs/incidents', IncidentController.listSpecificForOng)

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/incidents/:id', IncidentController.detail)

module.exports = routes;