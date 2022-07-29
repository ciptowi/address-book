const router = require("express").Router();
const {
  getContact,
  getContactById,
  createContact,
  UpdateContact,
  deleteContact,
} = require("../controllers");

router.get("/api/v1/contact", getContact);
router.get("/api/v1/contact/:id", getContactById);
router.post("/api/v1/contact", createContact);
router.put("/api/v1/contact", UpdateContact);
router.delete("/api/v1/contact", deleteContact);

module.exports = router;
