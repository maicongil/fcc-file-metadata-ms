var express = require('express'),
    multer  = require('multer'),
    upload = multer({ dest: 'uploads/' }),
    app = express(),
    port = process.env.PORT || 8000;
 
app.get("/", function(req, res){
    res.send("OK");
});

app.listen(port, function(){
    console.log("Server is listening on port "+ port);
});