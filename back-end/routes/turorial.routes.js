module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorials.createNewTutorial);
  
    // Retrieve all Tutorials
    router.get("/", tutorials.getAllTutorial);
  
    // Retrieve all published Tutorials
   // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findTutorialById);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.updateATutorial);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.deleteATutorial);
  
    // Delete all Tutorials
    //router.delete("/", tutorials.deleteAll);
  
    app.use("/api/tutorials", router);
  };