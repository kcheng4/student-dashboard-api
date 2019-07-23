const students = require('./students.json');

const getStudentAttendance = (attendancePercent)=>{
    return students.filter((el)=>{
        return el.attendancePercentage<attendancePercent;
    });
};

module.exports = {
    getStudentAttendance
}