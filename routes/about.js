
const express = require('express');
const router = express.Router();
const CostItemModel = require('../models/costitemmodel');

router.get('/', (req, res) => {
    return new Promise((resolve, reject) => {
      const developers = [
        {
          firstname: "developer",
          lastname: "one",
          id: "111222333",
          email: "developerone@gmail.com"
        },
        {
         firstname: "developer",
          lastname: "two",
          id: "112233333",
          email: "developertwo@gmail.com"
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