const axios = require('axios');
const { JSDOM } = require('jsdom');
const { Readability, isProbablyReaderable } = require('@mozilla/readability');
const Mercury = require("@postlight/mercury-parser");

const express = require('express')
const app = express()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); //allow front-end to access API with CORS Policy
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json()) // only accept json in body
const port = 3001

app.post('/', async (req, res) => {
    const { url } = req.body
    const result = axios.get(url)
    let dom = new JSDOM(result.data, {
        url
    });

    if (isProbablyReaderable(dom.window.document)) {
        let article = new Readability(dom.window.document).parse();
        res.send(JSON.stringify(article))
        return
    } else {
        const mecuryResult = await Mercury.parse(url)
        if (mecuryResult.content) {
            res.send(mecuryResult)
            return
        }
    }

    res.send(`{"useBrowser": true}`)
})

app.listen(port, () => {
    console.log(`News page crawler listening on port ${port}`)
})
