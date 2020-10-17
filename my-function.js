const { json } = require('body-parser');
const express = require('express')
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/say/:key',(req,res)=>{

    axios.get('https://hhq4a8aycd.execute-api.us-east-2.amazonaws.com/newLive/say')
    .then(function (response) {
        let res1=response.data+" "+req.params.key;
        res.send(res1);
    })
    .catch(function (error) {
        console.log(error);
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})