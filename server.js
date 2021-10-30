const express = require('express')
const app = express()
const request = require('request')
const cors = require('cors')

const API_KEY = process.env.REACT_APP_API_KEY

const corsOptions = {
    origin: 'https://api.getAddress.io',
}

app.get('/cors', (req, res) => {
    res.send('This has CORS enabled')
})

app.get('/', cors(corsOptions), (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    const url = `https://api.getAddress.io/autocomplete/london?api-key=${API_KEY}`
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    })
})

app.post('/', cors(corsOptions), (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    const url = `https://api.getAddress.io/private-address/se2wsq?api-key=${API_KEY}`
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    })
})

app.listen(8000, () => {
    console.log('listening on port 8000')
})
