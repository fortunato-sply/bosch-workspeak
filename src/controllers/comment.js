var temp = require('../config/tempHolder');
var post = require('../model/post');
var sector = require('../model/sector');
var comment = require('../model/comment');

module.exports = {
    async addComment(req, res){
        if(temp.user != null){        
            const getUser = temp.user;
            const dados = req.body;

            await comment.create({
                Content: dados.content,
                IDUser: getUser.IDUser,
                IDPost: dados.postID,
                IDSector: getUser.IDSector,
            });

            res.redirect("/home");
        } else {
            res.redirect("/");
        }
    },
    
    async deleteComment(req, res){
        if(temp.user != null){
            const idComment = req.params.id;

            await comment.destroy({
                where: {IDComment: idComment}
            })

            res.redirect("/home");
        } else{
            res.redirect("/");
        }
    },
}