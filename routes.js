const express = require("express")
const route = express.Router()
const home_controller = require("./src/controllers/home_controller")


//Routes for home
route.get("/",home_controller.index)
route.post("/search/:mode",home_controller.search)



module.exports = route