var express = require('express'),
    multer  = require('multer'),
    path = require('path'),
    os = require('os'),
    bodyParser = require('body-parser'),
    upload = multer({ dest: os.tmpdir(), limits : {fileSize : 1048576} }).single('uploadFile'),
    app = express(),
    port = process.env.PORT || 8000;
 

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
    res.sendFile("index.html");
});


app.post("/upload", function(req, res){
//User Story: I can submit a FormData object that includes a file upload.
//User Story: When I submit something, I will receive the file size in bytes within the JSON response
    upload(req, res, function (err) {
        if (err) {
            res.end(JSON.stringify({error : err}));    
        }
        if(!req.file){
            res.end(JSON.stringify({error : 'File not informed'}));    
        }else{
            res.end(JSON.stringify({fileSize : req.file.size}));
        }
    });
});

app.listen(port, function(){
    console.log("Server is listening on port "+ port);
});