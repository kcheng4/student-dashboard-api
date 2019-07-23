//Student variable takes in data from the json file provided
const students = require('./students.json');

//getStudentAttendance function takes in a number and the function filters
//out students that are above said number and provides an array of 
//students below the threshold
const getStudentAttendance = (attendancePercent)=>{
    return students.filter((el)=>{
        return el.attendancePercentage<attendancePercent;
    });
};

module.exports = {
    getStudentAttendance
}