const Spot = require('../models/Spot')

module.exports = {
    async Show(req,res){
        const {user_id} = req.headers
                    //buscando todos os spots, que o campo user no bd é igual ao user_id
        const spots = await Spot.find({user: user_id})

        return res.json(spots)
    }
}
