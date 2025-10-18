const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Register
router.post('/register', async (req, res) => {
    try{
        const { name, email, password, department, basicSalary } = req.body;
        let emp = await Employee.findOne({ email });
        if(emp) return res.status(400).json({ msg: "Employee already exists" });

        emp = new Employee({ name, email, password, department, basicSalary });
        await emp.save();
        res.json({ msg: 'Employee registered successfully' });
    } catch(err){
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Login
router.post('/login', async (req, res) => {
    try{
        const { email, password } = req.body;
        const emp = await Employee.findOne({ email });
        if(!emp) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, emp.password);
        if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const payload = { id: emp._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch(err){
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Profile (protected)
const auth = require('../middleware/auth');
router.get('/profile', auth, async (req, res) => {
    try{
        const emp = await Employee.findById(req.employeeId).select('-password');
        res.json(emp);
    } catch(err){
        console.error(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
