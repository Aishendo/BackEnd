const express = require("express");
const app = express();
const port = 3000;
var path = require('path');
const https = require('https');
var http=require('http');
const fs = require("fs");
const mineType = require("mime-types");
const {response} = require("express");
const bodyParser=require("body-parser")
const request=require('request');
app.use(bodyParser.urlencoded({extended:true}))
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/js",express.static(__dirname+'/js'));
app.use(express.static('public'))
app.get('/',((req, res) => {
    res.sendFile(__dirname+'/home.html')
}))
app.get('/home',((req, res) => {
    res.sendFile(__dirname+'/home.html')
}))
app.get('/games',((req, res) => {
    res.sendFile(__dirname+'/games.html')
}))
app.get('/cinema',((req, res) => {
    res.sendFile(__dirname+'/cinema.html')
}))
app.get('/music',((req, res) => {
    res.sendFile(__dirname+'/music.html')
}))
app.get('/index',((req, res) => {
    res.sendFile(__dirname+'/index.html')
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/exp',((req, res) => {
    res.sendFile(__dirname+'/exp.html')
}))

app.post('/games',(req, res) => {
    let crypto = req.body.crypto
    console.log(crypto);
    const options = {
        method: 'GET',
        url: 'https://steam2.p.rapidapi.com/search/' + crypto + '/page/1',
        headers: {
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
            'X-RapidAPI-Key': 'ff03032b4emsh64468f3e989e341p1c6ca8jsnb0673548dd37',
            useQueryString: true
        }
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        let json=JSON.parse(body)
       let game1=json[0].title;
        let image1=json[0].imgUrl;
        var audioUrl = '"'+ image1+  '"';
        let game2=json[1].title;
        let image2=json[1].imgUrl;
        let game3=json[2].title;
        let image3=json[2].imgUrl;
        let game4=json[3].title;
        let image4=json[3].imgUrl;
        res.send("First game is "+game1+"; Second game is "+game2+"; Third game is "+game3+"; And fourth game is "+game4)
    });

});
app.listen(port, function () {
    console.log(`app launched at address: http://localhost:${port}`)
})
    //const axios = require("axios");
    app.post('/music', (req, res) => {
        let musice = req.body.currency;
        const options1 = {
            method: 'GET',
            url: 'https://spotify23.p.rapidapi.com/search/',
            params: {
                q: "'" + musice + "'",
                type: 'multi',
                offset: '0',
                limit: '10',
                numberOfTopResults: '5'
            },
            headers: {
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
                'X-RapidAPI-Key': 'ff03032b4emsh64468f3e989e341p1c6ca8jsnb0673548dd3'
            }
        };

        axios.request(options1).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        request(options1, function (error, response, body) {
            if (error) throw new Error(error);
            let json = JSON.parse(body)
            console.log(json);
            let music1 = json.playlists.items[0].name;
            console.log(music1);
            res.send("First game is " + music1)
        });
    });



