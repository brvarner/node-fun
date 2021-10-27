const path = require('path')
const fs = require('fs')
const request = require('request')

let dataPath = path.join(__dirname, '../data.json')

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if(err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {
        console.log(item.data.title)
    })
    
    fs.writeFile(dataPath, res.body, err => {
        if(err) console.log(err)
    })
})