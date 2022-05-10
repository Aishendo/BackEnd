const express = require('express');
const bodyParser = require('body-parser');
const axios = require("axios");
const app = express();
const port=3000
const UserController = require('./controllers/User')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const dbConfig = require('./config/database-config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const UserRoute = require('./routes/User')
const user=require('./model/user')
const https = require("https");
const request=require('request');
app.use('/user',UserRoute)
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/registr.html')
});
app.get('/games',((req, res) => {
    res.sendFile(__dirname+'/games.html')
}))
app.get('/cinema',((req, res) => {
    res.sendFile(__dirname+'/cinema.html')
}))
app.get('/music',((req, res) => {
    res.sendFile(__dirname+'/music.html')
}))
app.get('/home',((req, res) => {
    res.sendFile(__dirname+'/home.html')
}))
app.post("/login", async(req, res) => {
    try {
        const username=req.body.username;
        const password=req.body.password;
        const useremail=await user.find({username});

        console.log(useremail[0].id);
        if(useremail[0].password===password){
         res.sendFile(__dirname+'/home.html')
        }else{
            res.send("incorrect password")
        }

    }catch (error){
        res.status(400).send("Invalid")
    }
});

app.get('/log', (req, res) => {
   res.sendFile(__dirname+'/login.html')
});
app.post('/games',(req, res) => {
    let crypto = req.body.crypto
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
app.post('/cinema',(req, res) => {
        let cinemaG=req.body.crypto;
        let api="3555a76b4788127f37bff3ab69d8bf00"
        let url="https://api.themoviedb.org/3/discover/movie?api_key="+api+"&with_genres="+cinemaG+"&units=metric&mode=json"
        https.get(url,(response)=>{
            response.on('data', (d) => {
                let json=JSON.parse(d)
                let rate=json.results[0].original_title
                var score=json.results[0].vote_average
                let rate1=json.results[1].original_title
                var score1=json.results[1].vote_average
                let rate2=json.results[2].original_title
                var score2=json.results[2].vote_average
                let rate3=json.results[3].original_title
                var score3=json.results[3].vote_average
                res.send("First movie is "+rate+"with score "+score+"; Second gmovie is "+rate1+"with score "+score1+"; Third movie is "+rate2+"with score "+score2+"; And fourth movie is "+rate3+"with score "+score3)
            });
        })
    }
);
app.post('/music', (req, res) => {
    let musice=req.body.currency;
    const options1 = {

        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/search/',
        params: {
            q: musice,
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
app.listen(port, function () {
    console.log(`app launched at address: http://localhost:${port}`)
})

