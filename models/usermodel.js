/* Developers Details: 
  First Name:Hai
  Last Name:Elimelech
  Id:315942458

  First Name:Adir
  Last Name:Solomon
  Id:206825440
  */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    birthday: String
  });

 module.exports = mongoose.model('users', userSchema);
