const express = require('express');
const cors = require('cors');
const fetch = require('request')
const env = require('dotenv').config()

const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: "http://localhost:8080"
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const API_KEY = process.env.REACT_APP_ADMINISTRATION_KEY

const requestEndpoint = `https://api.getAddress.io/private-address/se2wsq?api-key=${API_KEY}`;

app.post('/createnewaddress', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'POST'
    }
    const response = await fetch(requestEndpoint, fetchOptions);
    const data = await response.json();
    res.json(data);
    console.log(req.body)
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});