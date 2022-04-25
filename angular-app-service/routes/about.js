var express = require('express');
var router = express.Router();

/* GET about listing. */
router.get('/', function(req, res, next) {

    // Sending Json file
  let jsonResponse ={
    "about":[
      { "h3" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eveniet pariatur cum harum exercitationem! Cupiditate hic voluptate laboriosam fuga incidunt ut, optio quibusdam cumque, tempora, necessitatibu", imageName: "about_img"}
    ]
  }
  res.json(jsonResponse)
});

module.exports = router;
