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

//get musicians part 3 
//create a new musician
app.post('/musicians', async (req, res) => {
    const newArtist = await Musician.create(req.body)
    
    const allMusicians = await Musician.findAll()
    res.json(allMusicians)
})
//update a musician
app.put('/musicians/:id', async (req, res) => {
    const updateMusician = await Musician.findByPk(req.params.id)
    await updateMusician.update(req.body)

    const allMusicians = await Musician.findAll()
    res.json(allMusicians)
})

app.delete('/musicians/:id', async (req, res) => {
    const deleteMusician = await Musician.destroy({
        where: {
            id: req.params.id
        }
    })
    const allMusicians = await Musician.findAll()
    res.json(allMusicians)
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})