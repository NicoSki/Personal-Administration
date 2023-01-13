const express = require('express');
const routes = express.Router();
const { getPersonal, newPersonal ,addPersonal, deletePersonal, getParticular ,updatePersonal } = require('../controllers');


//*TODAS LAS PERSONAS
routes.get('/', getPersonal);

//*PERSONA NUEVA
routes.get('/newPersonal', newPersonal);

//*AGREGAR PERSONA
routes.post('/newPersonal', addPersonal);


//*ELIMINAR PERSONA
routes.post('/:id', deletePersonal);

//*ACCEDER A PERSONAL PARTICULAR
routes.get('/edit/:id', getParticular);

//*MODIFICAR PERSONA
routes.post('/edit/:id', updatePersonal);

module.exports = routes;