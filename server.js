import express from 'express';
import wines from './src/assets/data/top100_2018_full';

const app = express();

app.get('/api/wines', (req, res) => {
    res.send(wines);
})

app.get('/api/wines/:id', (req, res) => {
    const wine = wines.find(el => el.id === req.params.id);
    res.send(wine);
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}...`))

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});