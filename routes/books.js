const express = require('express');
const { getBooks, addBooks, deleteBook,updateBook } = require('../controllers/books');
const router = express.Router();


router.route('/')
.get(getBooks)
.post(addBooks)


.delete(deleteBook)

module.exports = router;
