const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      trim: true,
      required: [true, 'Please fill in text fields'],
    },
    amount: {
      type: Number,
      trim: true,
      required: [
        true,
        'Please provide amount (positive - income or negative - expense)',
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Transaction', TransactionSchema);
