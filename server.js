const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {getStudentAttendance} = require('./controllers/getStudentAttendance');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/:attendancepercent',(req,res)=>{
    const attendancePercent = req.params.attendancepercent;
    res.send(getStudentAttendance(attendancePercent));
});

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})

module.exports = {app};