const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1 + num2;

  res.send(`The result of the calculation is ${result}`);
});

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function (req, res) {
  const height = parseFloat(req.body.height);
  const weight = parseFloat(req.body.weight);

  const result = parseFloat(weight / (height * height)).toFixed(1);

  res.send(`Your BMI is ${result}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
