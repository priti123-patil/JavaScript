let runAgain = true;
while (runAgain) {
    let age = prompt("Enter your age??")
    age = Number.parseInt(age);
    if (age < 0) {
        console.error("Enter valid age!!");
    }
    else {
        if (age > 18) {
            alert("You can drive")
        }
        else {
            alert("You can't drive")
        }
    }
    runAgain = confirm("You want to see this again??");
}