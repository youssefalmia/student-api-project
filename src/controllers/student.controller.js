const Student = require('../model/student.model')


exports.createStudent = async (req,res,next) => {
    // Creating a Student model from the request body
    const student = new Student({
        ...req.body
    });
    // Saving the student to mongodb
    student.save().then(()=>{res.status(200).json(student)}).catch(error => res.status(400).json(error));
}

// return all the students found
exports.findStudents = (req, res , next) => {
    Student.find().then(participant => res.status(200).json(participant)).catch(error => res.status(400).json(error));
}

exports.findOneStudent = (req, res , next) => {
    Student.find({_id: req.params.id}).then(participant => res.status(200).json(participant)).catch(error => res.status(400).json(error));
}

exports.modifyStudent = (req, res, next) => {
    Student.updateOne({_id: req.params.id}, {...req.body})
        .then(student => res.status(200).json({student}))
        .catch(error => res.status(404).json({error}));

}