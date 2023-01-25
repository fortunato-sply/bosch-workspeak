const sector = require('../model/sector');
const user = require('../model/user');

module.exports = {
    async registerLoad(req, res){
        const sectors = await sector.findAll({
            raw: true,
            attributes: ['IDSector', 'Name']
        });

        res.render('../views/register', {sectors});
    },

    async register(req, res){
        dados = req.body;

        let pic = 'user.png';

        await user.create({
            Name: dados.name,
            Password: dados.password,
            IDSector: dados.IDSector,
            Picture: pic,
        });

        res.render('../views/login');
    },
}

