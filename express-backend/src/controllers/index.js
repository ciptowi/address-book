const { Contact } = require("../db/models");

const sendResponse = (res, code, success, msg, data, err) => {
  return res.status(code).json({
    success: success,
    message: msg,
    data: data,
    error: err,
  });
};

module.exports = {
  getContact: (req, res) => {
    try {
      Contact.findAll()
        .then((data) => {
          sendResponse(res, 200, true, null, data, null);
        })
        .catch((error) => {
          sendResponse(res, 404, true, "Not found", null, error.message);
        });
    } catch (error) {
      sendResponse(res, 500, false, null, null, error.message);
    }
  },
  getContactById: (req, res) => {
    const id = req.params.id;
    try {
      Contact.findOne({ where: { id: id } })
        .then((data) => {
          sendResponse(res, 200, true, null, data, null);
        })
        .catch((error) => {
          sendResponse(res, 404, true, "Not found", null, error.message);
        });
    } catch (error) {
      sendResponse(res, 500, false, null, null, error.message);
    }
  },
  createContact: (req, res) => {
    const newContact = req.body;
    try {
      Contact.create(newContact)
        .then((data) => {
          sendResponse(res, 200, true, null, data, null);
        })
        .catch((error) => {
          sendResponse(res, 400, true, null, null, error.message);
        });
    } catch (error) {
      sendResponse(res, 500, false, null, null, error.message);
    }
  },
  UpdateContact: (req, res) => {
    const id = req.params.id;
    const newUpdate = req.body;
    try {
      Contact.update(newUpdate, { where: { id: id } })
        .then((data) => {
          sendResponse(res, 200, true, null, data, null);
        })
        .catch((error) => {
          sendResponse(res, 404, true, null, null, error.message);
        });
    } catch (error) {
      sendResponse(res, 500, false, null, null, error.message);
    }
  },
  deleteContact: (req, res) => {
    const id = req.params.id;
    Contact.findOne({ where: { id } })
      .then((data) => {
        if (!data) {
          sendResponse(res, 404, true, "Not found", null, null);
        }
        Room.destroy({ where: { id } });
        sendResponse(res, 200, true, "Room was Deleted!", null, null);
      })
      .catch(() => {
        sendResponse(res, 500, true, null, null, error.message);
      });
  },
};
