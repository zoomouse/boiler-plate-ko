const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://youngSeo:Wlsn3825@boilerplate-at9ee.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('안녕하세요!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))