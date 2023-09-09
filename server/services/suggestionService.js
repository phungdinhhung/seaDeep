const database = require('../models/index')

class suggestionService {
    getAllSugg = async() => {
        return await database.Suggestion.findAll();
    }
    postSugg = async(data) => {
        console.log("data:" + data)
        return await database.Suggestion.create(data)
    }
}

module.exports = new suggestionService()