const express = require("express");
const router = express.Router();

// Import the model
const burger = require("../models/burger");

// CREATE ALL ROUTES
router.get("/", function(req, res) {
    burger.all(function(data) {
        // handle bars object 
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.get("/api/burgers", function(req, res) {
	burger.all(function(data) {
			var hbsObject = {
			burger: data
			};
			console.log(hbsObject);
			res.json(hbsObject);
	});
});

// creating new burger
router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name"], [ req.body.burger_name], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// route for updating the burgers devoured status
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  burger.update({devoured: req.body.devoured}, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    };
  });
});

// export routes for server.js to use.
module.exports = router;


