const express = require('express');
const pug = require('pug');
const port = 80;
const app = express();
const path = require('path');
app.use('/static', express.static('static'));
app.use(express.urlencoded())
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
    const params = {
        name : 'Jane Appleseed',
        number : '0000 0000 0000 0000',
        month : '00',
        year : '00',
        cvv : '001'
    }
    res.status(200).render('index.pug',params);
})
app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).render('thankyou.pug', req.body);
})



app.listen(port, () => {
    console.log("The server is start on port " + port);
})