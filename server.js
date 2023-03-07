const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

app.use(express.json())
//TODO
app.get('/musicians', async (req, res) => {
    const allMusicians = await Musician.findAll()    
    res.json(allMusicians)
})

app.get('/musicians/:id', async (req, res) => {
    const artist = await Musician.findByPk(req.params.id)
    res.json(artist)
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})