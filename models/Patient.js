const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: {type: String, required: true},
    paternalLastName: {type: String, required: true},
    maternalLastName: {type: String},
    email: {type: String, match: /[\w\.-]+@[\w\.-]+\.[\w\.]+/, required: true},
    password: {type: String, required: false},
    appointment: [{type: Schema.Types.ObjectId, ref: 'Appointment'}]

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;