var num = Math.random();
console.log(num);
console.log("this is number :" , num);
let score = 0;
let n = 0;
while (n != num) {
    n = prompt("Guess a number!! ");
    if (n > num) {
        console.log("Hey this is a greater number!!")
    }
    else 
    {
        console.log("Hey this is a smaller number!!");
    }
    score += 1;
}
alert("Congratulations :)) , You have entered a correct number!!");
score = 100 - score;
alert("Your score is ", score);
console.log("Your score is " ,score);
