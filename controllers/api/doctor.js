const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/Doctor');
const withAuth = require('../../utils/auth');
const { Doctor } = require('../../models');

router.post('/', withAuth, async (req, res) => {
    try {
      const newDoctor = await Doctor.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newDoctor);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const doctorData = await Doctor.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!doctorData) {
        res.status(404).json({ message: 'No Doctor found with this id!' });
        return;
      }
  
      res.status(200).json(doctorData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  