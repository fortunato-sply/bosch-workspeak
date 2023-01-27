var temp = require('../config/tempHolder');
var post = require('../model/post');
var sector = require('../model/sector');

module.exports = {
    async newPost(req, res){
        if(temp.user != null){        
            const getUser = temp.user;
            const dados = req.body;

            if(dados.sector == "sectorId"){
                await post.create({
                    Content: dados.content,
                    General: false,
                    IDUser: getUser.IDUser,
                    IDSector: getUser.IDSector,
                });
            } else{
                await post.create({
                    Content: dados.content,
                    General: true,
                    IDUser: getUser.IDUser,
                    IDSector: getUser.IDSector,
                });
            }

            const sect = await sector.findByPk(temp.user.IDSector, {
                raw: true,
                attributes: ['IDSector', 'Name']
            });

            res.redirect("/home");
        } else{
            res.redirect("/");
        }
    }
}