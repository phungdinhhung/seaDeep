const suggestionService = require('../services/suggestionService')

class suggestionController {
    getAllSugg = async(req,res) => {
        await suggestionService.getAllSugg()
        .then(data => {
            data === 0 ? res.status(204).send() : res.status(200).json(data)
        })
    }
    postSugg = async(req,res) => {
        await suggestionService.postSugg(req.body)
        .then(data => {
            data == "please Login" ? res.status(400).send("login") : res.status(200).send(data)
        })
    }
}

module.exports = new suggestionController()