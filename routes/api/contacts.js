const express = require('express')

const router = express.Router();

const ctrl = require("../../controllers/contacts")

const { validateBody, isValidId, validaFavoriteteBody, authenticate } = require('../../middlewares')

const {schemas} = require('../../models/contact')

router.get('/', authenticate, ctrl.listContacts)

router.get('/:id', authenticate, isValidId, ctrl.getContactById)

router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.addContact)

router.patch("/:id/favorite", authenticate, isValidId, validaFavoriteteBody(schemas.updateStatusContactSchema), ctrl.updateStatusContact);

router.delete('/:id', authenticate, isValidId, ctrl.removeContact)

router.put('/:id', authenticate, isValidId, validateBody(schemas.addSchema), ctrl.updateContact)

module.exports = router
