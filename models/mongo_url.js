var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var globals = require('../models/globals.js');

mongoose.connect('mongodb://'+globals.global.username+':'+globals.global.password+'@ds135866.mlab.com:35866/url_shortener');

var Schema = mongoose.Schema;

var urlSchema = new Schema ({
    longURL: String,
    shortURL: String
});

var urlModel = mongoose.model("urlLongToShort", urlSchema);

module.exports = {
    urlLongToShort: urlModel
};

