const express = require('express')
const app = express()
const request = require('request')
const cors = require('cors')

const corsOptions = {
    origin: 'https://api.getAddress.io',
}


app.get('/cors', (req, res) => {
    res.send('This has CORS enabled')
})

app.get('/', cors(corsOptions), (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    const url = 'https://api.getAddress.io/autocomplete/london?api-key=odHqOd1MsECNFi_4xTyXtw33193'
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    })
})

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.post('/', cors(corsOptions), (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    const url = 'https://api.getAddress.io/private-address/se2wsq?api-key=W7Ky26qT5EeUMsi0t1R0LA33168'
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
