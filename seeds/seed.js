const sequelize = require('../config/connection');
const { Doctor, Patient } = require('../models');

const doctorData = require('./doctorData.json');
const patientData = require('./patientData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const doctors = await Doctor.bulkCreate(doctorData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of patientData) {
    await Patient.create({
      ...project,
      doctor_id: doctors[Math.floor(Math.random() * doctors.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
