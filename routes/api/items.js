const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Item");

//@route  GET api/items
//@desc   Get ALL Item
//@access Public
//  req and res is request and respond
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

//@route  POST api/items
//@desc   Create A POST
//@access Public
//  req and res is request and respond
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

//@route  DELETE api/items/:id
//@desc   Create A POST
//@access Public
//  req and res is request and respond
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

module.exports = router;
