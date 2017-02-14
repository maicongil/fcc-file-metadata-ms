var express = require('express'),
    multer  = require('multer'),
    path = require('path'),
    upload = multer({ dest: 'uploads/' }),
    app = express(),
    port = process.env.PORT || 8000;
 

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.sendFile("index.html");
});

app.post("/upload", upload.array(), function(req, res){
//User Story: I can submit a FormData object that includes a file upload.
//User Story: When I submit something, I will receive the file size in bytes within the JSON response
    console.log(req.body);
    res.send("UPLOAD");
});

app.listen(port, function(){
    console.log("Server is listening on port "+ port);
});