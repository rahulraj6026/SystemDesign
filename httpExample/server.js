const express = require('express')
//create a app
const app = express()

//format of the request should be in JSON
app.use(express.json())

//listen to a given port
app.listen(3000, () => console.log("Listening to port 3000! ...."));

//create a GET request
app.get('/hello', (req, res) => {
        console.log(req.headers);
        console.log(req.method);
        res.send("Get request received! ");
    });

app.post("/test", (req, res) => {
    console.log(req.headers);
    console.log(req.method);
    res.send("Post request received! ");
});