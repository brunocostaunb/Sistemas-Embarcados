const mongoose = require('../database');
const bcrypt = require('bcryptjs');
//phone_prefix:"", cpf_cnpj: "", cc_emails:"", zip_code:"", number:"", street:"",city:"",state:"",district:"",complement:""};
const ClienteSchema = new mongoose.Schema({
	API_TOKEN:{
		type:String,
		required:true,
	},
	EMAIL:{
		type:String,
		unique:true,
		required:true,
		lowercase:true,
	},
	NAME:{
		type:String,
		required:true,
	},
	
	NOTES:{
		type:String,
		required:true,
		select:false,
	},
	PHONE:{
		type:String,
		required:true,
	},
	PHONE_PREFIX:{
		type:String,
		required:true,
	},
	CPF_CNPJ:{
		type:String,
		required:true,
		select:false,
	},

	CC_EMAILS:{
		type:String,
		required:true,
	},
	ZIP_CODE:{
		type:String,
		required:true,
	},
	NUMBER:{
		type:String,
		required:true,
	},
	STREET:{
		type:String,
		required:true,
	},
	CITY:{
		type:String,
		required:true,
	},
	STATE:{
		type:String,
		required:true,
	},
	DISTRICT:{
		type:String,
		required:true,
	},
	COMPLEMENT:{
		type:String,
		required:true,
	},

	
});



const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;