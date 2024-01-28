function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }

  var students = [];

  for (var i = 0; i < numberOfStudents; i++) {
    var seatNumber = i + 1;
    students.push(studentSeat(seatNumber)());
  }

  return students;
}

// Create closure classRoom with 10 students
var classRoom = createClassRoom(10);
