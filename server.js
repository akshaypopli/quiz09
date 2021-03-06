const express = require('express')
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/say', async (req,res)=>{
    if(req.query && req.query.keyword){
        //https://hhq4a8aycd.execute-api.us-east-2.amazonaws.com/newLive/say?keyword=hi
        await axios.get('https://hhq4a8aycd.execute-api.us-east-2.amazonaws.com/newLive/say?keyword='+req.query.keyword)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }else {
        res.send("Please add any keyword");
    }
    
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})