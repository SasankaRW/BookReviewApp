require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reviewRoutes = require('./routes/review');
const cors = require('cors');

const app = express()


app.use(cors());
app.use(bodyParser.json());

app.use('/api', reviewRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Database Connected!')
    app.listen(8080, () => {
        console.log('Srver is running on port 8080')
    });
})
.catch(()=>{
    err => console.log(err)
});
