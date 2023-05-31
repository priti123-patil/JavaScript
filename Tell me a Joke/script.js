
let arr=[
`Why don't scientists trust atoms? Because they make up everything!`,
`I told my wife she was drawing her eyebrows too high. She looked surprised.`,
`Why did the scarecrow win an award? Because he was outstanding in his field.`,
`Did you hear about the restaurant called Karma? There's no menu - you get what you deserve.`,
`Why don't ants get sick? Because they have tiny ant-bodies.`,
`I'm reading a book about anti-gravity. It's impossible to put down.`,
`Why did the tomato turn red? Because it saw the salad dressing!`,
`What do you call an alligator in a vest? An investigator.`,
`What do you get when you cross a snowman and a shark? Frostbite.`,
`Why did the math book look sad? Because it had too many problems.`]
function showJoke(){
    let n = Math.floor(Math.random() * 10);
    document.getElementById("jokeContainer").innerHTML = arr[n];
}