const express = require('express');

const {
    getUsers,
    setUser,
    editUser,
    deleteUser
} = require('../controllers/users.controller')

const router = express.Router();

router.get('/', getUsers);
router.post('/', setUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;