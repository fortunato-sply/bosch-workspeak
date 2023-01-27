var temp = require('../config/tempHolder');
const sector = require('../model/sector');
const user = require('../model/user');
const fs = require('fs');

module.exports = {
    async getProfile(req, res){
        if(temp.user != null){        
            const getUser = await user.findByPk(temp.user.IDUser, {
                raw: true,
                attributes: ['IDUser', 'Name', 'Password', 'Role', 'IDSector', 'Picture']
            });

            const sect = await sector.findByPk(temp.user.IDSector, {
                raw: true,
                attributes: ['IDSector', 'Name']
            });
            const sectors = await sector.findAll({
                raw: true,
                attributes: ['IDSector', 'Name']
            });

            res.render('../views/profile', {getUser, sect, sectors});
        } else{
            res.redirect("/");
        }
    },

    async saveChanges(req, res){
        if(temp.user != null){        
            const dados = req.body;

            if(req.file){
                const antigaFoto = await user.findAll({
                    raw: true,
                    attributes: ['Picture'],
                    where: { IDUser: temp.user.IDUser }
                });
                if (antigaFoto[0].Foto != 'user.png') fs.unlink(`public/img/$
                {antigaFoto[0].Foto}`, ( err => { if(err) console.log(err); } ));
                await user.update(
                    {Picture: req.file.filename},
                    {where: { IDUser: temp.user.IDUser }}
                );
            }

            await user.update({
                Name: dados.name,
                Role: dados.role,
                IDSector: dados.sector,
            },
            {
                where: { IDUser: temp.user.IDUser }
            });

            const getUser = await user.findByPk(temp.user.IDUser, {
                raw: true,
                attributes: ['IDUser', 'Name', 'Password', 'Role', 'IDSector', 'Picture']
            });

            temp.login(getUser);

            res.redirect("/home");
        } else{
            res.redirect("/");
        }
    },

    async changePassword(req, res){
        if(temp.user != null){        
            const dados = req.body;

            const getUser = await user.findByPk(temp.user.IDUser, {
                raw: true,
                attributes: ['IDUser', 'Name', 'Password', 'Role', 'IDSector']
            });

            if(dados.oldpassword == getUser.Password){
                await user.update({
                    Password: dados.newpassword
                },
                {
                    where: { IDUser: temp.user.IDUser }
                });
            }
            
            const sect = await sector.findByPk(temp.user.IDSector, {
                raw: true,
                attributes: ['IDSector', 'Name']
            });
            const sectors = await sector.findAll({
                raw: true,
                attributes: ['IDSector', 'Name']
            });

            res.redirect('/edit');
        } else{
            res.redirect("/");
        }
    },
}