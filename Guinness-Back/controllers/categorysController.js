
httpStatus = require("http-status-codes");
const { prototype } = require('multer/lib/counter');
const Connection = require('mysql/lib/Connection');
const Comment = require('../models/comment');
const User = require('../models/user');
const Post = require('../models/post');
const { internalServerError } = require('./errorController');
const multer = require("multer");
const { isLoggedIn } = require("./middlewares");
const passport = require("passport");


getcategoryParams = body => {
    return {
        categoryNum: body.categoryNum,
        categoryName: body.categoryName,
    };
};

