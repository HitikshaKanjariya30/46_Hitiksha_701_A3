const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    date: { type: Date, required: true },
    reason: { type: String, required: true },
    grant: { type: String, default: "No" },
}, { timestamps: true });

module.exports = mongoose.model('Leave', LeaveSchema);
