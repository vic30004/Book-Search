
// @desc    Get all books
// @route   GET /api/v1/books
// @access  public
exports.getBooks=(req,res,next)=>{
    res.status(200).json({ sucess: true, msg: 'Get all books', hello: req.hello });
}
// @desc    Add books
// @route   POST /api/v1/books
// @access  public
exports.addBooks=(req,res,next)=>{
    res.status(200).json({ sucess: true, msg: 'Add books' });
}
// @desc    Delete a single book
// @route   DELETE /api/v1/books/:id
// @access  public
exports.deleteBook=(req,res,next)=>{
    res.status(200).json({ success: true, msg: 'delete a single book' });
}