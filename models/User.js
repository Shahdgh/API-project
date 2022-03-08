const mongoose = require("mongoose")
const Joi = require("joi")

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  avatar: String,
  password: String,
})
const signupJoi = Joi.object({
  firstName: Joi.string().min(1).max(50).required(),
  lastName: Joi.string().min(1).max(50).required(),
  email: Joi.string().email().required(),
  avatar: Joi.string().uri().min(6).max(1000).required(),
  password: Joi.string().min(6).max(100).required(),
})

const loginJoi = Joi.object({
  firstName: Joi.string().min(1).max(50),
  lastName: Joi.string().min(1).max(50),
  email: Joi.string().email().required(),
  avatar: Joi.string().uri().min(6).max(1000),
  password: Joi.string().min(6).max(100),
})


const User = mongoose.model("User", userSchema)
module.exports.User = User 
module.exports.signupJoi= signupJoi
module.exports.loginJoi= loginJoi
