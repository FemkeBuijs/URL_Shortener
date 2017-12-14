var express = require('express');
var router = express.Router();
var mongo_url = require('../models/mongo_url.js');

router.get('/:shortURL', function(req, res, next){
    var query = {shortURL: req.params.shortURL};
    //search in the database to find the matching shortURL
    mongo_url.urlLongToShort.find(query, function(err, result){
        if(err){
            console.log(err);
        } else {
            //if found, return the longURL and redirect the page to this address
            res.redirect(result[0].longURL)
        }
    });
});

module.exports = router;