'use strict'

var Usuarios = require('../models/usuarios');
var token = require('../helpers/token');
var bcrypt = require('bcrypt-nodejs');


function validarPasswordDeUsuario(req, resp){

    var parametros = req.body;

    var emailIngresado = parametros.email;
    var passwordIngresado = parametros.password;

    Usuarios.findOne({email: emailIngresado}, (err, usuarioEncontrado) => {
        if(err || usuarioEncontrado == null){
            resp.status(500).send({message: "No se pudo encontrar el usuario"});
        }
        else{
            bcrypt.compare(passwordIngresado, usuarioEncontrado.password, (err, check)=>{
                if(check){
                    resp.status(200).send({message: "Usuario autenticado", token : token.obtenerTokenDeUsuario(usuarioEncontrado)});
                }
                else{
                    resp.status(403).send({message: "No se pudo autenticar el usuario"});
                }
            });
        }
    });

}

module.exports = {

    validarPasswordDeUsuario
};