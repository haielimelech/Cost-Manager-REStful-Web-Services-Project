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
  
  router.post('/', (req, res) => {
    console.log(req.body); 
    const newCostItem = new CostItemModel({
        user_id: req.body.user_id,
        year: req.body.year,
        month: req.body.month,
        day: req.body.day,
        description: req.body.description,
        category: req.body.category,
        sum: req.body.sum
    });
  
    newCostItem.save()
        .then(() => res.send('Cost item added successfully!'))
        .catch((error) => res.send(error));
  });
  
  module.exports = router;
