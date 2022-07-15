const fs = require("fs");

// Add
const addStudent = (id, name, degree, total, comment) => {
  const students = loadStudents();
  const duplicateID = students.filter((std) => {
    return std.id === id;
  });
  if (duplicateID.length === 0) {
    var deg = degree[0].split(",").map(function (item) {
      return parseInt(item, 10);
    });
    var total = 0;
    for (let i = 0; i < deg.length; i++) {
      total += deg[i];
    }
    students.push({
      id,
      name,
      degree,
      total,
      comment,
    });
    console.log("Saved Successfully");
    saveStudent(students);
  } else {
    console.log("Error Duplicate ID");
  }
};

const loadStudents = () => {
  try {
    const data = fs.readFileSync("students.json").toString();
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};
const saveStudent = (students) => {
  const saveData = JSON.stringify(students);

  console.log(saveData);
  fs.writeFileSync("students.json", saveData);
};

// Delete
const deleteStudent = (id) => {
  const students = loadStudents();
  const studentsToKeep = students.filter((obj) => {
    return obj.id !== id;
  });
  if (students.length !== studentsToKeep.length) {
    saveStudent(studentsToKeep);
    console.log("Deleted sucessfully");
  } else {
    console.log("ID is not found");
  }
};

// Read
const readStudent = (name) => {
  const students = loadStudents();
  const student = students.find((el) => {
    return el.name === name;
  });
  if (student) {
    console.log(`${student.name} Total:${student.total}`);
  } else {
    console.log("Not found");
  }
};
// List

const listStudents = () => {
  const students = loadStudents();
  students.forEach((elem) => {
    console.log(elem.id, elem.name, elem.total);
  });
};

module.exports = {
  addStudent,
  deleteStudent,
  readStudent,
  listStudents,
};
