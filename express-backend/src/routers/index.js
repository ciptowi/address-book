const router = require("express").Router();
const {
  getContact,
  getContactById,
  createContact,
  UpdateContact,
  deleteContact,
} = require("../controllers");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

router.get("/api/v1/contact", getContact);
router.get("/api/v1/contact/:id", getContactById);
router.post("/api/v1/contact", createContact);
router.put("/api/v1/contact/:id", UpdateContact);
router.delete("/api/v1/contact/:id", deleteContact);

module.exports = router;
