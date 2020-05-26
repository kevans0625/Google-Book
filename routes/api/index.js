const router = require("express").Router();
const userRoutes = require("./book");

router.use("/book", userRoutes);

module.exports = router;