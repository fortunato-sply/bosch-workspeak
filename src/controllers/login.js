const user = require('../model/user');

module.exports = {
    async loadPage(req, res){
        res.render('../views/login');
    },

    async loginIn(req, res){
        const dados = req.body;
        var getUser;
        var validateUser = false;

        const users = await user.findAll({
            raw: true,
            attributes: ['IDUser', 'EDV', 'Password']
        });
        
        users.forEach(user => {
            if(user.EDV == dados.EDV && user.Password == dados.password)
            {
                getUser = user;
                validateUser = true;
            }
        });

        if(validateUser)
            res.render('../views/index', {getUser});
        else
            res.render('../views/index', "none");
    },
}