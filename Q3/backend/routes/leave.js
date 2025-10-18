const express = require('express');
const router = express.Router();
const Leave = require('../models/Leave');
const auth = require('../middleware/auth');

// Add leave
router.post('/add', auth, async (req, res) => {
    try{
        const { date, reason } = req.body;
        const leave = new Leave({ employeeId: req.employeeId, date, reason });
        await leave.save();
        res.json({ msg: 'Leave added successfully' });
    } catch(err){
        console.error(err);
        res.status(500).send('Server error');
    }
});

// List leaves for logged-in employee
router.get('/list', auth, async (req, res) => {
    try{
        const leaves = await Leave.find({ employeeId: req.employeeId });
        res.json(leaves);
    } catch(err){
        console.error(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
