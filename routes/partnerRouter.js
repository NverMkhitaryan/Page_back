const Router = require("express");
const router = new Router();

const {create, getAll} = require("../controllers/partnerController");

router.post("/add", create);
router.get("/all", getAll);

module.exports = router;