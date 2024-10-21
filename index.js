
import express from 'express';

const app = express();

const port = process.env.PORT || 3001;

const landmarks = {
    eiffelTower: {
        city: "Paris",
        country: "France"
    },
    tokyoTower: {
        city: "Tokyo",
        country: "Japan"
    },
    operaHouse: {
        city: "Sydney",
        country: "Australia"
    },
    pyramids: {
        city: "Cairo",
        country: "Egypt"
    },
    statueOfLiberty: {
        city: "New York",
        country: "USA"
    },
    ThePalaceMuseum: { 
        city: "Beijing", 
        country: "China" 
    }
};

app.get('/', (req, res) => {
    const requestedCountry = req.query.country; 

    const matchingLandmarks = []; 

    for(const landmark in landmarks){
        if(landmarks[landmark].country.toLowerCase() === requestedCountry.toLowerCase()){
            matchingLandmarks.push(landmark);
        }
    }

    res.send(matchingLandmarks);
});

app.get('/landmark/:landmark', (req, res) => {
    const requestedLandmark = req.params.landmark.toLowerCase();

    for (const landmark in landmarks) {
        if (landmark.toLowerCase() === requestedLandmark) {
            res.send(`The landmark ${landmark} is located in ${landmarks[landmark].city}, ${landmarks[landmark].country}`);
            return;
        }
    }

    res.status(404).send('Landmark not found');
});

app.listen(port, () => {
    console.log(`My app is listening on port ${port}`);
});
