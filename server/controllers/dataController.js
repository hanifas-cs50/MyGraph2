const Data = require("../models/dataModel")
const mongoose = require("mongoose")

const getAllData = async (req, res) => {
  const datas = await Data.find({}).sort({ createdAt: -1 });
  res.status(200).json(datas);
}

const getSomeData = async (req, res) => {
  const pagePosition = req.query.page;
  const limit = 5;

  const datas = await Data.find({}).sort({ _id: 1 }).skip((pagePosition - 1) * limit).limit(limit);
  const count = await Data.countDocuments({}, { hint: "_id_" });

  const load = { count: count, datas: datas }
  res.status(200).json(load);
}

const createData = async (req, res) => {
  const { name, item, quantity, orderDate } = req.body

  try {
    const data = await Data.create({ name, item, quantity, orderDate })
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteData = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Item" })
  }

  const data = await Data.findOneAndDelete({ _id: id })

  if (!data) {
    return res.status(404).json({ error: "No such Item" })
  }

  res.status(200).json(data)
}

const updateData = async (req, res) => {
  const { id } = req.params
  const { item, quantity } = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Item" })
  }

  const data = await Data.findByIdAndUpdate({ _id: id }, {
    item, quantity
  })

  if (!data) {
    return res.status(404).json({ error: "No such Item" })
  }

  res.status(200).json(data)
}

module.exports = {
  createData, getAllData, getSomeData, deleteData, updateData
}