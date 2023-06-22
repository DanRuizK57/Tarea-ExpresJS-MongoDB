import UsuarioModel from '../models/usuario.model.js';
import bcrypt from 'bcrypt';

function getDescription(req, res){
    const student = "Daniel Ruiz Kemp";
    res.send({ student })
}

async function registrarUsuario(req, res) {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let dni = req.body.dni;

    let password = req.body.password;
    const passwordEncriptada = bcrypt.hashSync(password, 10);
    password = passwordEncriptada;

    let error = "Falta el campo ";

    if(name === undefined){
        error += "name"
        res.status(400).send({error: error});
    } else if (email === undefined){
        error += "email"
        res.status(400).send({error: error});
    } else if (dni === undefined) {
        error += "dni"
        res.status(400).send({error: error});
    } else if(validarDniRepetido(dni)){
        error = "¡DNI repetido!"
        res.status(400).send({error: error});
    }else if (password === undefined) {
        error += "password"
        res.status(400).send({error: error});
    } else {
        await UsuarioModel.create({name: name, email: email, dni: dni, password: password});
        res.send(true);
    }
  
  } catch (err) {
    res.status(500).send({error: err});
  }
}

function validarDniRepetido(dni){
    let repetido = false;
    const usuarios = UsuarioModel.find({});

    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        if (usuario.dni === dni) {
            repetido = true
        }
    }

    return repetido;

}

async function obtenerUsuarios(req, res) {
    try {
        const usuarios = await UsuarioModel.find({});
        res.send(usuarios);
      } catch (err) {
        res.status(500).send({error: err});
      }
}

async function login(req, res) {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let error = "Falta el campo ";

        if(email === undefined){
            error += "email"
            res.status(400).send({error: error});
        } else if (password === undefined){
            error += "password"
            res.status(400).send({error: error});
        }

        let usuario = await obtenerUsuarioPorEmail(email);

        const passwordCoincide = await bcrypt.compare(password, usuario.password);

        if (passwordCoincide){
            res.send(true);
        } else {
            res.send(false);
        }
        
      } catch (err) {
        res.status(500).send({error: err});
      }
}

async function obtenerUsuarioPorEmail(email){
    let usuario = null;
    const usuarios = await UsuarioModel.find({});

    for (let i = 0; i < usuarios.length; i++) {
        const usuarioArray = usuarios[i];
        if (usuarioArray.email === email) {
            usuario = usuarioArray;
        }
    }

    return usuario;

}


export { getDescription, 
         registrarUsuario,  
         obtenerUsuarios,
         login
        };
