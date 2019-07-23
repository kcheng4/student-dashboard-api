const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {getStudentAttendance} = require('./controllers/getStudentAttendance');

//Express app is used for API creation
const app = express();
//port is either 3000 for development environment or a specified one for prod
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

//GET endpoint for fetching a list of students below a certain attendance threshold
app.get('/:attendancepercent',(req,res)=>{
    const attendancePercent = req.params.attendancepercent;
    res.send(getStudentAttendance(attendancePercent));
});

//Server start
app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})

module.exports = {app};