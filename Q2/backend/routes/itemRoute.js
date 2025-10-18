const express = require("express");
const router = express.Router();
const Item = require("../models/item");

// Get all items
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Add new item
router.post("/", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).json(item);
});

// Update item
router.put("/:id", async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
});

// Delete item
router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
