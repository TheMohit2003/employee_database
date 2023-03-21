const mongoose = require('mongoose');

const dataSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    age: {
      type: Number,
    },
    department: {
      type: String,
    },
    status: {
      type: Number,
      enum: [1, 2, 3], //1, 2 , 3
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Data', dataSchema);
