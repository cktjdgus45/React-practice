const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=> {
    res.send([
            {
            'id':1,
            'image':'http://placeimg.com/64/64/1',
            'name' : '홍길동',
            'birthday': '971022',
            'gender': 'male',
            'job': 'student'
             },
            {
            'id':2,
            'image':'http://placeimg.com/64/64/2',
            'name' : '김유동',
            'birthday': '960922',
            'gender': 'male',
            'job': 'professor'
             },
             {
            'id':3,
            'image':'http://placeimg.com/64/64/3',
            'name' : '천유동',
            'birthday': '920421',
            'gender': 'male',
            'job': 'programmer'
            }
    ])
})
app.listen(port,()=>console.log(`Listening on port ${port}`));