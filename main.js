const toDoArray = [];

let input = prompt("What would you like to do?".toLowerCase());

while (input !== "quit") {

    if (input === "list") {

        console.log("*************************");
        for (let i = 0; i < toDoArray.length; i++) {
            console.log(`${i} : ${toDoArray[i]}`)
        }
        console.log("*************************");

    } else if (input === "new") {

        input = prompt("Enter a todo");
        toDoArray.push(input);
        console.log(toDoArray);

    } else if (input === "delete") {

        let indexStr = parseInt(prompt("Enter index of todo to delete"));
        if (indexStr !== NaN) {
            toDoArray.splice(indexStr, 1)
            console.log("Done Delete");
        }
    }

    input = prompt("What would you like to do?".toLowerCase());

}
console.log("You Quit");

