const express = require('express');
const route = express.Router();

const multer = require("multer");
const config = require('./src/config/multer');

const home = require('./src/controllers/home');
const login = require('./src/controllers/login');
const register = require('./src/controllers/register');
const edit = require('./src/controllers/edit');
const post = require('./src/controllers/post');
const comment = require('./src/controllers/comment');
const user = require('./src/controllers/user');

route.get('/home', home.pagInicialGet);
route.get('/', login.loadPage);
route.get('/logout', login.logOut);
route.post('/Home', login.loginIn);
route.post('/register', register.register);
route.get('/edit', edit.getProfile);
route.post('/save', multer(config).single('attfoto'), edit.saveChanges);
route.post('/changePassword', edit.changePassword);
route.post('/newPost', post.newPost);
route.post('/editPost/:id', post.editPost);
route.post('/deletePost/:id', post.deletePost);
route.post('/updatePost', post.updatePost);
route.post('/addComment', comment.addComment);
route.post('/deleteComment/:id', comment.deleteComment);
route.post('/userProfile/:id', user.getProfile);

module.exports = route;
