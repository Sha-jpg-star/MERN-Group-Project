const express = require("express");
const router = express.Router();
const Billing = require("../Model/Billing");

// GET all billing records
router.get("/", async (req, res) => {
  try {
    const billings = await Billing.find();
    res.json(billings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new billing record
router.post("/", async (req, res) => {
  const billing = new Billing({
    patientName: req.body.patientName,
    service: req.body.service,
    amount: req.body.amount,
    billingDate: req.body.billingDate,
  });

  try {
    const newBilling = await billing.save();
    res.status(201).json(newBilling);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a billing record
router.put("/:id", async (req, res) => {
  try {
    const updatedBilling = await Billing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedBilling);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a billing record
router.delete("/:id", async (req, res) => {
  try {
    await Billing.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
