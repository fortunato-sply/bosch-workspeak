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
    },

    async editPost(req, res){
        if(temp.user != null){
            const idPost = req.params.id;

            const postContent = await post.findByPk(idPost, {
                attributes: ['IDPost', 'Content', 'General']
            });

            res.render("../views/editpost.ejs", {postContent, idPost});
        } else{
            res.redirect("/");
        }
    }, 
    
    async deletePost(req, res){
        if(temp.user != null){
            const idPost = req.params.id;

            await post.destroy({
                where: {IDPost: idPost}
            })

            res.redirect("/home");
        } else{
            res.redirect("/");
        }
    },

    async updatePost(req, res){
        if(temp.user != null){
            const dados = req.body;

            if(dados.sector == "sectorId"){
                await post.update({
                    Content: dados.content,
                    General: false,
                },
                {
                    where: { IDPost: dados.idPost }
                });
            } else{
                await post.update({
                    Content: dados.content,
                    General: true,
                },
                {
                    where: { IDPost: dados.idPost }
                });
            }

            res.redirect("/home");
        } else{
            res.redirect("/");
        }
    },
}