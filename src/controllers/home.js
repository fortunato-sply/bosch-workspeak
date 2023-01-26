var temp = require('../config/tempHolder');
const sector = require('../model/sector');

module.exports = {
    async pagInicialGet(req, res){
        const getUser = temp.user;
        const sect = await sector.findByPk(temp.user.IDSector, {
            raw: true,
            attributes: ['IDSector', 'Name']
        });
        
        res.render('../views/index', {getUser, sect});
    }
}