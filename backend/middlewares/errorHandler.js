const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    msg: 'error , please check the request type and body before sending the request',
  });
};

module.exports = { errorHandler };
