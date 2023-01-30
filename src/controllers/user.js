var temp = require('../config/tempHolder');
const sector = require('../model/sector');
const user = require('../model/user');
const fs = require('fs');

module.exports = {
    async getProfile(req, res){
        const userId = req.params.id;

        console.log(userId);

        if(temp.user != null){    
            const getUser = await user.findByPk(userId, {
                raw: true,
                attributes: ['IDUser', 'Name', 'Role', 'IDSector', 'Picture', 'Description']
            });

            const sect = await sector.findByPk(getUser.IDSector, {
                raw: true,
                attributes: ['IDSector', 'Name']
            });

            res.render('../views/viewprofile', {getUser, sect});
        } else{
            res.redirect("/");
        }
    },
}