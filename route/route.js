const {addStud, updateStud, getAllStud, deleteStud} = require('./../controller/studentController');
const {con} = require('./../config/config');

exports.route=(app)=>{
    app.post('/Student', addStud);

    app.get('/Student', getAllStud);

    app.put('/Student',updateStud);

    app.delete('/Student/:stud_id', deleteStud);
}