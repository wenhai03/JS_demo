let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.end(new Date().toLocaleTimeString());
});
app.listen(8080);
