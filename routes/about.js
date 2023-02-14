/* Developers Details: 
  First Name:Hai
  Last Name:Elimelech
  Id:315942458

  First Name:Adir
  Last Name:Solomon
  Id:206825440
  */

const express = require('express');
const router = express.Router();
const CostItemModel = require('../models/costitemmodel');

router.get('/', (req, res) => {
    return new Promise((resolve, reject) => {
      const developers = [
        {
          firstname: "Hai",
          lastname: "Elimelech",
          id: "315942458",
          email: "hai842@gmail.com"
        },
        {
         firstname: "Adir",
          lastname: "Solomon",
          id: "206825440",
          email: "adir199@gmail.com"
        }
      ];
      resolve(developers);
    })
    .then((developers) => {
      res.send(developers);
    })
    .catch((error) => {
      res.send(error);
    });
  });

  module.exports = router;