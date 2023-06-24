const express = require('express');

const app = express();


// middleware
app.use(express.json());

app.listen(3000, ()=>{
    console.log("Listening to request at port 3000.")
})


app.get('/', (req, res)=>{
    res.status(200).json({
        msg: "hello, socket!"
    })
})