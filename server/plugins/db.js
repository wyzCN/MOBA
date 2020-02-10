module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://localhost/moba', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

  require('require-all')(__dirname + '/../models')
}