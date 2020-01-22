const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Cliente = require('../models/criar_cliente');

const axios = require('axios');



params = {api_token: "3b1b97994eb47ec32b9901400626003a", email: "costa.eeunb@gmail.com", name: "mano", notes: "", phone: "",phone_prefix:"", cpf_cnpj: "", cc_emails:"", zip_code:"", number:"", street:"",city:"",state:"",district:"",complement:""};

async function makePostRequest() {


    let res = await axios.post('https://api.iugu.com/v1/customers',params);

    console.log(res.data);
}

makePostRequest();