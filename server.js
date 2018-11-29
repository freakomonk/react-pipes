const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/app/login', (req, res) => {
  res.send({ express: 'Login' });
});

app.post('/app/login', (req, res) => {
  if(req.body.username === 'Suman' && req.body.password === 'tumativ')
   res.send('OK');
   else res.send('Invalid');

});


app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `Validating your login. Please wait`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
