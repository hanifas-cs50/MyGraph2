const express = require("express")
const {
  createData, getAllData, deleteData, updateData,
  getSomeData
} = require("../controllers/dataController")

const router = express.Router()

router.get("/", getSomeData)

router.get("/all", getAllData)

router.post("/", createData)

router.delete("/:id", deleteData)

router.patch("/:id", updateData)

module.exports = router