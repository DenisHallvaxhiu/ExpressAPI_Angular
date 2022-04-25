var express = require('express');
var router = express.Router();

/* GET shipping listing. */
router.get('/', function(req, res, next) {

    // Sending Json file
  let jsonResponse ={
    "shipping":[
      { location : "1127 Ferguson Street , Worcester , MA" ,shipped : "Shipped" , delivered: "Not Delivered"},
      { location : "3766 Fannie Street , Cambridge , MA" ,shipped : "Not Shipped" , delivered: "Not Delivered"}
    ]
  }
  res.json(jsonResponse)
});

module.exports = router;
