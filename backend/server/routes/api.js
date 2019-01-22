const express = require("express");
const router = express.Router();

const Animal = require("../models/animal");

const mongoose = require("mongoose");
const db = "mongodb://ciaranMcKenna:test123@ds161104.mlab.com:61104/animals";

mongoose.connect(
  db,
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.error("Error!" + err);
    } else {
      console.log("Connected to mongodb");
    }
  }
);

router.post("/add", async (req, res) => {
  try {
    const registrationData = req.body;
    const animal = new Animal(registrationData);

    animal.save((err, animal) => {
      if (err) {
        console.log(err);
      }
      res.status(200).send(animal);
    });
  } catch (error) {
    console.log(error);
  }

});

router.get("/all", async (req, res) => {
  try {
    const animals = await Animal.find({}, "-_id -__v");
    res.send(animals);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.get("/info/:animal", async (req, res) => {
  try {
    const species = req.params.animal;
    const animal = await Animal.find({ species: species });

    res.send(animal);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
})

router.post("/delete", async (req, res) => {
  const animal = req.body;
  const id = animal[0]._id;

  try {
    await Animal.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.put("/update/:id/habitat/:habitat", async (req, res) => {
  const _id = req.params.id;
  const habitat = req.params.habitat;

  try {
    await Animal.findByIdAndUpdate({_id}, {$set:{habitat:habitat}}, {new: true});
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
