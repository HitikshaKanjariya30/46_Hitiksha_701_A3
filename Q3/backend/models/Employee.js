const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    department: { type: String },
    basicSalary: { type: Number, default: 0 },
}, { timestamps: true });

// Hash password before save
EmployeeSchema.pre('save', async function(next){
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('Employee', EmployeeSchema);
