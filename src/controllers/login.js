const user = require('../model/user');
const sector = require('../model/sector');
var temp = require('../config/tempHolder');

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
            attributes: ['IDUser', 'Name', 'EDV', 'Password', 'IDSector', 'Role', 'Picture', 'Description'],
        });
        
        users.forEach(user => {
            if(user.EDV == EDV && user.Password == dados.password)
            {
                getUser = user;
                validateUser = true;
            }
        });

        const sectors = await sector.findAll({
            raw: true,
            attributes: ['IDSector', 'Name']
        });

        if(validateUser)
        {
            temp.login(getUser);

            res.redirect('/home');
        }   
        else
            res.render('../views/login', {sectors});
    },
    
    async logOut(req, res){
        temp.logout();
        
        const sectors = await sector.findAll({
            raw: true,
            attributes: ['IDSector', 'Name']
        });

        res.render('../views/login', {sectors});
    }
}