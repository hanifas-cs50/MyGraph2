const mongoose = require("mongoose")

const Schema = mongoose.Schema

const dataSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model("test", dataSchema)