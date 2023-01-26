const sector = require('../model/sector');
const user = require('../model/user');

module.exports = {
    async register(req, res){
        dados = req.body;
        console.log(dados);

        await user.create({
            Name: dados.name,
            EDV: dados.edv,
            Password: dados.password,
            IDSector: dados.sector,
        });

        const sectors = await sector.findAll({
            raw: true,
            attributes: ['IDSector', 'Name']
        });

        res.render('../views/login', {sectors});
    },
}

