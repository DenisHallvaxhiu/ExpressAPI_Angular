var express = require('express');
var router = express.Router();

/* GET home listing. */
router.get('/', function(req, res, next) {

  // Sending Json file
  let jsonResponse ={
    "handsetCards":[
      { imageName: "image1",title: 'Travel', cols: 2, rows: 1 },
      { imageName: "image2", title: 'Phones', cols: 2, rows: 1 },
      { imageName: "image3", title: 'Gadgets', cols: 2, rows: 1 },
      { imageName: "image4", title: 'Cars', cols: 2, rows: 1 }
    ]
    ,
    "webCards":[
      { imageName: "image1",title: 'Travel', cols: 2, rows: 1 },
      { imageName: "image2", title: 'Phones', cols: 1, rows: 1 },
      { imageName: "image3", title: 'Gadgets', cols: 1, rows: 2 },
      { imageName: "image4", title: 'Cars', cols: 1, rows: 1 }
    ]
  }
  res.json(jsonResponse)
});

module.exports = router;
