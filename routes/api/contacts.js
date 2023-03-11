const express = require('express')

const router = express.Router();

const ctrl = require("../../controllers/contacts")

const { validateBody, isValidId, validaFavoriteteBody } = require('../../middlewares')

const {schemas} = require('../../models/contact')

router.get('/', ctrl.listContacts)

router.get('/:id', isValidId, ctrl.getContactById)

router.post('/', validateBody(schemas.addSchema), ctrl.addContact)

router.patch("/:id/favorite", isValidId, validaFavoriteteBody(schemas.updateFavoriteSchema), ctrl.updateFavorite);

router.delete('/:id', isValidId, ctrl.removeContact)

router.put('/:id', isValidId, validateBody(schemas.addSchema), ctrl.updateContact)

module.exports = router
