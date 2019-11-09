const express = require('express');
const { getBooks, addBooks, deleteBook } = require('../controllers/books');
const router = express.Router();


router.route('/')
.get(getBooks)
.post(addBooks)


router.route('/:id')
.delete(deleteBook)

module.exports = router;
