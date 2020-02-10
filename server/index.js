const express = require('express')

const app = express()

app.set('secret', 'abcd')

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app);
require('./routes/admin')(app);
require('./routes/web')(app);

app.listen(3000, () => {
  console.log('App is Running at http://127.0.0.1:3000/');
})