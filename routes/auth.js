const express = require("express");
const { user2 } = require("../controllers/login");
const homeRouter = express.Router();
const {authMiddleware} = require("../middleware/auth")

homeRouter.use(authMiddleware)



// homeRouter.get("/login2",user2)

module.exports = homeRouter;