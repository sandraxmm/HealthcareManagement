const Doctor = require('./Doctor');
const Patient = require('./Patient');

Doctor.hasMany(Patient, {
  foreignKey: 'doctor_id',
  onDelete: 'CASCADE'
});

Patient.belongsTo(Doctor, {
  foreignKey: 'doctor_id'
});

module.exports = { Doctor, Patient };
