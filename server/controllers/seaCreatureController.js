const seaCreatureService = require("../services/seaCreatureService");

class SeaCreatureController {
    showAllSC = async(req,res) => {
        await seaCreatureService.showAllSC()
        .then(data => {
        data.length === 0 ? res.status(400).json("Empty") : res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
    }
    uploadSC = async(req,res) => {
    await seaCreatureService.uploadSC(req.body)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err =>{
        res.status(500).send(err.message)
    })
    }
    removeSC = async(req,res) => {
        const seaCreature = req.query.id;
        await seaCreatureService.removeSC(seaCreature)
        .then(data => {
          data !== "WRONG" ? res.status(200).json("delete success") : res.stautus(400).json("something went wrong") 
        })
        .catch(err => {
            return res.status(500).send(err.message)
        })
    }
}

module.exports = new SeaCreatureController()