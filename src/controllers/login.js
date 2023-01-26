const user = require('../model/user');
const sector = require('../model/sector');

module.exports = {
    async loadPage(req, res){
        const sectors = await sector.findAll({
            raw: true,
            attributes: ['IDSector', 'Name']
        });

        res.render('../views/login', {sectors});
    },

    async loginIn(req, res){
        const dados = req.body;
        var getUser;
        var validateUser = false;

        const EDV = parseInt(dados.edv);
        const users = await user.findAll({
            raw: true,
            attributes: ['IDUser', 'EDV', 'Password', 'IDSector', 'Role', 'Picture']
        });
        
        console.log(dados);
       
        console.log(EDV); 
        users.forEach(user => {
            console.log(user);
            if(user.EDV == EDV && user.Password == dados.password)
            {
                getUser = user;
                validateUser = true;
            }
        });

        console.log(validateUser);

        const sectors = await sector.findAll({
            raw: true,
            attributes: ['IDSector', 'Name']
        });

        if(validateUser)
        {
            const sect = await sector.findByPk(getUser.IDSector, {
                raw: true,
                attributes: ['IDSector', 'Name']
            });
            console.log(sect);
            res.render('../views/index', {getUser, sect});
        }   
        else
            res.render('../views/login', {sectors});
    },
}