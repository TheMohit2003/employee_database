const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('its working');
});

app.listen(3000, () => {
  console.log('the server is running');
});
