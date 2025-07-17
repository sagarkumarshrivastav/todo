// Simple todo app using javascript
//
//
let todo = [
  "eat",
  "code",
  "sleep",
  "repeat",
  "bath",
  "rnsing",
  "breakfast",
  "lunch",
];

// user input
let req = prompt("Please enter your request");

while (true) {
  // initialise while loop as true so it can run infinitely
  if (req == "list") {
    // list task
    console.log("---------------------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("---------------------------");
  } else if (req == "add") {
    // add task
    let add = prompt("Enter your task you want to add");
    todo.push(add);
    console.log("Task Added");
  } else if (req == "delete") {
    // delete task
    let idx = prompt("Enter your task index you want to delete");
    todo.splice(idx, 1);
    console.log("Task Deleted");
  } else if (req == "update") {
    // update task
    let idx = prompt("Enter your index no. you want to update");
    let update = prompt("Enter your task you want to update");
    todo.splice(idx, 1, update);
    console.log("Task Updated");
  } else if (req == "quit") {
    // quit todo
    console.log("Quitting App");
    break;
  }
  req = prompt("Please enter your request"); // user input
}
