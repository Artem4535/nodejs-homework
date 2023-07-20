const express = require("express");
const router = express.Router();

const { validateBody } = require("../../middlewares");
const { schema } = require("../../models");
const { register } = require("../../controllers/user");

router.post("/register", validateBody(schema.registerSchema), register);

module.exports = router;
