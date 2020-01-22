const mongoose = require('../database');
const bcrypt = require('bcryptjs');
//nome,email,país,área,telefone,senha,signo,
const UserSchema = new mongoose.Schema({
	conta_premium:{
		type:Boolean,
		required:true,
	},
	nome:{
		type:String,
		required:true,
	},
	email:{
		type:String,
		unique:true,
		required:true,
		lowercase:true,
	},
	senha:{
		type:String,
		required:true,
		select:false,
	},
	pais:{
		type:String,
		required:true,
	},
	codigo_area:{
		type:String,
		required:true,
	},
	telefone:{
		type:String,
		required:true,
		select:false,
	},

	signo:{
		type:String,
		required:true,
	},
	createdAT:{
		type:Date,
		default:Date.now,
	},
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;