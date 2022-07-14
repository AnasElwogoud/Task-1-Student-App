const yargs = require("yargs");

// node app.js add --title="content" --body="content"
const students = require("./students");

yargs.command({
  command: "add",
  describe: "Add Student",
  builder: {
    id: {
      describe: "This is ID description in add command",
      demandOption: true,
      type: "number",
    },
    name: {
      describe: "This is name description in add command",
      demandOption: true,
      type: "string",
    },
    degree: {
      describe: "This is degrees description in add command",
      demandOption: true,
      type: "array",
    },
    total: {
      describe: "This is total degrees description in add command",
      demandOption: false,
      type: "number",
    },
    comment: {
      describe: "This is comment description in add command",
      demandOption: false,
      type: "string",
    },
  },
  handler: () => {
    students.addStudent(
      yargs.argv.id,
      yargs.argv.name,
      yargs.argv.degree,
      yargs.argv.total,
      yargs.argv.comment
    );
  },
});

// Delete
yargs.command({
  command: "delete",
  describe: "Delete Student Command",
  builder: {
    id: {
      describe: "This is ID description in add command",
      demandOption: true,
      type: "number",
    },
  },
  handler: () => {
    students.deleteStudent(yargs.argv.id);
  },
});

// read
yargs.command({
  command: "read",
  describe: "Read Student Command",
  builder: {
    name: {
      describe: "This is name description in add command",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => {
    students.readStudent(yargs.argv.name, yargs.argv.total);
  },
});

//list
yargs.command({
  command: "list",
  describe: "List Students Command",
  handler: () => {
    students.listStudents();
  },
});
yargs.parse();
