const express = require('express');
const router = express.Router()
const { createToken, validate, hashPassword, comparePassword } = require('../auth')
const mongoose = require("mongoose")
const { dbUrl } = require('../dbConfig')
const {ReceipeModel}=require('../schema/ReceipeSchema')


mongoose.connect(dbUrl)

router.get('/all',  async (req, res) => {
  try {
   
    const data = await ReceipeModel.find()
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/_id',  async (req, res) => {
  try {
     const { id } = req.params;
      const data = await ReceipeModel.findOne({ id: id });
// Send the data as JSON response
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.delete('/_id', async (req, res) => {
  try {
 
 const { id } = req.params;
      const data = await ReceipeModel.deleteOne({ id: id });
 res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/addreceipe', async (req, res) => {
  try {
    
      const newreceipe= req.body;
      const data = await ReceipeModel.insertMany(newreceipe);

    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/_id',  async (req, res) => {
  try {
const { id } = req.params;
      const updatereceipe = req.body;
      const data = await ReceipeModel.updateOne({id:id},{$set: updatereceipe});
 // Send the data as JSON response
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports=router