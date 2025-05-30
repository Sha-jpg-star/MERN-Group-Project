//backend/route/PatientsRoutes.js

const express = require("express");
const router = express.Router();
const Patients = require("./patients");

//GET all patients
router.get("/", async (req,res) =>{
    const patients = await Patients.find();
    res.json(patients);
});

//POST new patient
router.post("/", async (req,res)=>{
    const patients = new Patients(req.body);
    const saved = await patients.save();
    res.json(saved);
});

//PUT update patient
router.put("/:id", async (req,res) =>{
    const updated= await Patients.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
});
    res.json(updated);
});

//DELETE patient;
router.delete("/:id" , async (req,res)=>{
    await Patients.findByIdAndDelete(req.params.id);
    res.json({message:"Patients deleted"});
});

 module.exports = router;