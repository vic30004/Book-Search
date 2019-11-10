const Books = require('../models/Books');

// @desc    Get all books
// @route   GET /api/v1/books
// @access  public
exports.getBooks = async (req, res, next) => {
  try {
    const books = await Books.find();

    res.status(200).json({ sucess: true, count: books.length, data: books });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
// @desc    Add books
// @route   POST /api/v1/books
// @access  public
exports.addBooks = async (req, res, next) => {
  try {
    const books = await Books.create(req.body);
    res.status(201).json({ sucess: true, count: books.length, data: books });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Delete a single book
// @route   DELETE /api/v1/books/:id
// @access  public
exports.deleteBook = async (req, res, next) => {
  try {
    const books = await Books.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, count: books.length, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
