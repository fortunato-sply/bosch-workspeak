const sector = require('../model/sector');
const user = require('../model/user');

module.exports = {
    async register(req, res){
        dados = req.body;
        var validateUser = true;

        const users = await user.findAll({
            raw: true,
            attributes: ['IDUser', 'EDV']
        });
        
        users.forEach(user => {
            if(user.EDV == dados.edv)
            {
                validateUser = false;
            }
        });

        if(validateUser){
            await user.create({
                Name: dados.name,
                EDV: dados.edv,
                Role: "Default",
                Password: dados.password,
                IDSector: dados.sector,
            });
        }

        const sectors = await sector.findAll({
            raw: true,
            attributes: ['IDSector', 'Name']
        });

        res.render('../views/login', {sectors});
    },
}

