const express = require('express')
const router = express.Router();
const studentController = require("../controllers/student.controller")

router.post('/' , studentController.createStudent);

router.get('/', studentController.findStudents);

router.get('/:id', studentController.findOneStudent);

router.patch('/:id',studentController.modifyStudent);

module.exports = router;