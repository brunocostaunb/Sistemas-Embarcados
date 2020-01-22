const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const authConfig = require('../config/auth');

const User = require('../models/User');
const Cliente = require('../models/criar_cliente');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

router.post('/register', async (req, res) => {
    const { email } = req.body;
    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ erro: 'Usuário já existente'});
        const user = await User.create(req.body);

        user.senha = undefined;

        return res.send({ 
            user,
            token: generateToken({ id: user.id }),
        });
    }   catch (err){
        return res.status(400).send({ error: 'Falha no registro'});
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, senha } = req.body;

    const user = await User.findOne({ email }).select('+senha');

    if (!user)
        return res.status(400).send({ erro: 'Usuario nao encontrado'});

    if (!await bcrypt.compare(senha, user.senha))
        return res.status(400).send({ erro: 'Senha Invalida'});

    
    user.senha = undefined;


    res.send({ 
        user,
        token: generateToken({ id: user.id }),
    });
});

router.post('/teste', (req, res) => {

    //params = {api_token: "3b1b97994eb47ec32b9901400626003a", email: "costa.eeunb@gmail.com", name: "mano", notes: "", phone: "",phone_prefix:"", cpf_cnpj: "", cc_emails:"", zip_code:"", number:"", street:"",city:"",state:"",district:"",complement:""};

   //axios.get("https://api.github.com/users/brunocostaunb").then(function(data){
       //console.log(data);
   

    console.log('olá');
});

module.exports = app => app.use('/auth', router);