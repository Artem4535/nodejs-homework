const express = require("express");

const {
  getAllContacts,
  getContactById,
  addContact,
  ubdateContactById,
  ubdateFavourite,
  deleteContactById,
} = require("../../controllers/contacts");

const { checkID, validateBody } = require("../../middlewares");

const { validateSchema, ubdateFavouriteSchema } = require("../../models");

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:contactId", checkID, getContactById);

contactsRouter.post("/", validateBody(validateSchema), addContact);

contactsRouter.put("/:contactId", validateBody(validateSchema), checkID, ubdateContactById);

contactsRouter.patch(
  "/:contactId/favourite",
  validateBody(ubdateFavouriteSchema),
  checkID,
  ubdateFavourite
);

contactsRouter.delete("/:contactId", checkID, deleteContactById);

module.exports = contactsRouter;
