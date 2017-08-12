const express = require('express');
//import express from 'express'; This style is ES2015 modules installed in node.

// setups configuration that routes request to different route handlers
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// when the app is deployed to env (aws or heroku...) this tells which port number to use
const PORT = process.env.PORT || 5000;

app.listen(PORT);
