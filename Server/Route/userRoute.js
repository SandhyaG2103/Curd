const express = require('express');
const router = express.Router();
const { create, getAll, getOne, update, delete: deleteUser } = require('../Controller/userController'); // Corrected import for delete

router.post('/create', create);
router.get('/getall', getAll);
router.get('/getone/:id', getOne);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteUser); // Corrected method name


module.exports = router;
