const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema(
    {
      user_id: String ,
      year: Number,
      month: Number,
      food: [
        {
            id: String,
            day: Number ,
            description: String,
            sum: Number,
        },
      ],
      health: [
        {
            id: String,
            day: Number ,
            description: String,
            sum: Number,
        },
      ],
      housing: [
        {
            id: String,
            day: Number ,
            description: String,
            sum: Number,
        },
      ],
      sport: [
        {
            id: String,
            day: Number ,
            description: String,
            sum: Number,
        },
      ],
      education: [
        {
            id: String,
            day: Number ,
            description: String,
            sum: Number,
        },
      ],
      transportation: [
        {
            id: String,
            day: Number ,
            description: String,
            sum: Number,
        },
      ],
      other: [
        {
            id: String,
            day: Number ,
            description: String,
            sum: Number,
        },
      ],
    },
    {
      collection: "reports",
    }
  );

module.exports = mongoose.model('reports', reportSchema);
