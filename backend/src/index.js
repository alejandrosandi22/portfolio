const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(require('./routes/routes'));

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')} ...`)
});