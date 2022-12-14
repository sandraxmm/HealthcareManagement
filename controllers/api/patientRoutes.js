const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Patient } = require('../../models');

//allows doctor to create a new patient
router.post('/', withAuth, async (req, res) => {
    try {
      console.log(req.body);
      const newPatient = await Patient.create({
        ...req.body,
        doctor_id: req.session.doctor_id,
      });
  
      res.status(200).json(newPatient);
    } catch (err) {
      res.status(400).json(err);
    }
  });
 
  //allows doctor to delete patient
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const patientData = await Patient.destroy({
        where: {
          id: req.params.id,
          doctor_id: req.session.doctor_id,
        },
      });
  
      if (!patientData) {
        res.status(404).json({ message: 'No Patient found with this id!' });
        return;
      }
  
      res.status(200).json(patientData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
