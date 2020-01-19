var express = require('express');
var proxy = require('http-proxy-middleware');
 
var app = express();
 
app.use(
  '/images',
  proxy({ target: 'http://www.edreams.com', changeOrigin: true })
);
app.listen(5055);
 