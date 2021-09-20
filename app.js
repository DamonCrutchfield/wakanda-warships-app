const express = require('express');

const { sequelize } = require('./db');
const { Aircrafts } = require('./models');

const seed = require('./seed')

const PORT = process.env.PORT || 3000;

const app = express();

//Allow CORS requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


// serve static assets from the public/ folder
app.use(express.static('public'));



seed();

app.get('/aircrafts', async (req, res) => {
    const aircrafts = await Aircrafts.findAll()
    res.json(aircrafts)
})

app.get('/sauces/:id', async (req, res) => {
    const sauce = await Sauce.findByPk(req.params.id)
    res.json({ sauce })
})

app.listen(PORT, () => {
    sequelize.sync({ force: true });
    console.log(`Your server is running on http://localhost:${PORT}`);
})