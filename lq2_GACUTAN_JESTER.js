let name = prompt("Enter your name: ");
let course = prompt("Enter your course (BSCS, BSM, BAEL): ");
let age = parseInt(prompt("Enter your age: "));
let address = prompt("Enter your address: ");
let classRole = prompt("Enter your class role (Officer, Student, Teacher): ");

switch (course) {
  case "BSCS":
    switch (classRole) {
      case "Officer":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Student":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Teacher":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      default:
        alert("Invalid class role.");
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
    }
    break;
  case "BSM":
    switch (classRole) {
      case "Officer":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Student":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Teacher":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      default:
        alert("Invalid class role.");
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
    }
    break;
  case "BAEL":
    switch (classRole) {
      case "Officer":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Student":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Teacher":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      default:
        alert("Invalid class role.");
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
    }
    break;
  default:
    alert("Invalid course.");
    switch (classRole) {
      case "Officer":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Student":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Teacher":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      default:
        alert("Invalid class role.");
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
    }
    break;
}