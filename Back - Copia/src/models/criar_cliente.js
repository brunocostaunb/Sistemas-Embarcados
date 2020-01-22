const mongoose = require('../database');
const bcrypt = require('bcryptjs');
//phone_prefix:"", cpf_cnpj: "", cc_emails:"", zip_code:"", number:"", street:"",city:"",state:"",district:"",complement:""};
const ClienteSchema = new mongoose.Schema({
	api_token:{
		type:String,
		required:true,
	},
	email:{
		type:String,
		unique:true,
		required:true,
		lowercase:true,
	},
	name:{
		type:String,
		required:true,
	},
	
	notes:{
		type:String,
		required:true,
		select:false,
	},
	phone:{
		type:String,
		required:true,
	},
	phone_prefix:{
		type:String,
		required:true,
	},
	cpf_cnpj:{
		type:String,
		required:true,
		select:false,
	},

	cc_emails:{
		type:String,
		required:true,
	},
	zip_code:{
		type:String,
		required:true,
	},
	number:{
		type:String,
		required:true,
	},
	street:{
		type:String,
		required:true,
	},
	city:{
		type:String,
		required:true,
	},
	state:{
		type:String,
		required:true,
	},
	district:{
		type:String,
		required:true,
	},
	complement:{
		type:String,
		required:true,
	},

	
});



const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;