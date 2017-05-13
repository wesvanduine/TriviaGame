//function to start the game
$("#start").on("click", function(){
	$("#bodyContent").remove();
})

//Questions, answers, and correct answer array
var questions = [{
	question:"Kiko was...",
	answers:["an unfortunate Nicaraguan monkey that lost it's arms to a landmine", "a monkey that chose to do use technology how he saw fit", "able to throw his own feces with his mechanical arm", "All of the above"],
	correctAnswer:"All of the above"
}, {
	question:"Who said, It's like when somebody says they want to go birding with you, but really they just want to get you alone in the woods, so they can take your binoculars.",
	answers:["Dinesh", "Gilfoyle", "Jared", "Richard"],
	correctAnswer:"Jared"
}, {
	question:"What did Gilfoyle name his servers?",
	answers:["Bridgette", "Carla", "Anton", "Agamemnon"],
	correctAnswer:"Anton"
}, {
	question:"Who said, One of you is the least attractive person I've ever seen, and I'm not gonna say who?",
	answers:["Russ Henneman", "Erlich", "Galvin Belson" , "Monica"],
	correctAnswer:"Erlich"
},	{
	question:"Who said, I firmly believe we can only achieve greatness if first we achieve goodness?",
	answers:["Richard Hendricks", "Galvin Belson", "Peter Gregory", "Laurie Bream"],
	correctAnswer:"Galvin Belson"
}];