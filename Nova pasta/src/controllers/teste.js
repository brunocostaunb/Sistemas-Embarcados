const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//const Cliente = require('../models/criar_cliente');

const axios = require('axios');


//const { API_TOKEN } : "3b1b97994eb47ec32b9901400626003a";
//const { EMAIL } : "costa.eeunb@gmail.com";
//const { NAME } : "mano";
//const { NOTES } : "";
//const { PHONE } :"";
//const { PHONE_PREFIX } : "";
//const { CPF_CNPJ } : "";
//const { CC_EMAILS } : "";
//const { ZIP_CODE } : "";
//const { NUMBER } : "";
//const { STREET } : "";
//const { CITY } : "";
//const { STATE } : "";
//const { DISTRICT } : "";
//const { COMPLEMENT } : "";

params = {api_token: "3b1b97994eb47ec32b9901400626003a", email: "costa.eeunb@gmail.com", name: "mano", notes: "", phone: "",phone_prefix:"", cpf_cnpj: "", cc_emails:"", zip_code:"", number:"", street:"",city:"",state:"",district:"",complement:""};

//params = {api_token : API_TOKEN, email: EMAIL, name: NAME, notes: NOTES, phone: PHONE,phone_prefix:PHONE_PREFIX, cpf_cnpj: CPF_CNPJ, cc_emails:CC_EMAILS, zip_code:ZIP_CODE, number:NUMBER, street:STREET,city:CITY,state:STATE,district:DISTRICT,complement:COMPLEMENT};



axios.post('https://api.iugu.com/v1/customers',params)
  .then(function(response){
    console.log(response.data);
    console.log('salvo com sucesso');
    
  }); 