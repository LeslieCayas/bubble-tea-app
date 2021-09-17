function errorHandler(err, req, res, next) { // 4 parameters => error handler function
  console.error(err.stack)
  const status = err.status || 500 //defaults to 500 if err.status does not exist
  const message = err.message || 'Something went wrong'

  res.status(status)
    .json({
      error: message
    })
}

module.exports = errorHandler