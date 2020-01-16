const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
	tipo_de_conta:{
		type:String,
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
	estado:{
		type:String,
		required:true,
	},
	cidade:{
		type:String,
		required:true,
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