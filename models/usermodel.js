const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    birthday: String
  });

  
 module.exports = mongoose.model('users', userSchema);
