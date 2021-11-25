'use strict'

var Gallery = require('../models/gallery');

function consultarFotosPorUsuario(req, resp) {

    Gallery.find({ propietario: '619f05405e0849d8567a68d2'}, (err, fotosEncontrados) => {
        if (err) {
            resp.status(500).send({ message: "No se pudo consultar las fotos" });
        }
        else {
            resp.status(200).send({ contactList: fotosEncontrados });
        }
    });

}

module.exports = {
 
    consultarFotosPorUsuario,

};