var temp = require('../config/tempHolder');
const sector = require('../model/sector');
const post = require('../model/post');
const user = require('../model/user');
const comment = require('../model/comment');

module.exports = {
    async pagInicialGet(req, res){
        if(temp.user != null){            
            const getUser = temp.user;
            
            const sect = await sector.findByPk(temp.user.IDSector, {
                raw: true,
                attributes: ['IDSector', 'Name']
            });

            const posts = await post.findAll({
                raw: true,
                attributes: ['IDPost', 'Content', 'General', 'updatedAt'],
                include: [{
                    model: user,
                    required: true,
                    attributes: ['IDUser', 'Name', 'Picture', 'Role'],
                },{
                    model: sector,
                    required: true,
                    attributes: ['IDSector', 'Name'],
                }],
                order: [
                    ['updatedAt', 'DESC'],
            ],
            });
            
            const comments = await comment.findAll({
                raw: true,
                attributes: ['Content', 'IDPost'],
                include: [{
                    model: user,
                    required: true,
                    attributes: ['IDUser', 'Name', 'Picture', 'Role'],
                },{
                    model: sector,
                    required: true,
                    attributes: ['Name'],
                }]
            });
            
            res.render('../views/index', {getUser, sect, posts, comments});
        } else{
            res.redirect('/');
        }
    }
}