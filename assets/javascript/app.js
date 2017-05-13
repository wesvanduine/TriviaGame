//function to start the game
$("#start").on("click", function(){
	game.start();
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
//array to keep track of correct, incorrect and counter 
var game = {
	correct: 0,
	incorrect: 0,
	counter: 20,
	//function to add the game counter to the html. console log when counter reaches 0 game is up
	countdown: function(){
		game.counter--;
		$("#counter").html(game.counter);
		if(game.counter==0){
			game.done();
		}
	},
	//function that runs when start button is clicked
	start: function(){
		//set timer to countdown from 120 seconds by a second at a time. I think this is where I am getting the error after the countdown if up. Also, the countdown keeps going after it hits 0.
		timer = setInterval(game.countdown,1000);
		$("#bodyContent").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
		$("#start").remove();
		$("#gif").remove();
			//change the html on the body content to list the questions and answers. make answers a clickable event
			for(var i = 0; i < questions.length; i++){
			$("#bodyContent").append("<h2>" + questions[i].question + "</h2>");
			for(var j = 0; j < questions[i].answers.length; j++){
				$("#bodyContent").append("<input type='radio' name= 'question- "+i+"' value='" +questions[i].answers[j]+"'>"+questions[i].answers[j]);
			}
		}
	},
	//function to verify the checked slection against the correct answer and either increase correct or incorrect for each question on the page
	done: function(){
		$.each($('input[name="question-0"]:checked'),function(){
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
			console.log(game.correct);		});

		$.each($('input[name="question-1"]:checked'),function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-2"]:checked'),function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-3"]:checked'),function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-4"]:checked'),function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		game.result();
		},

		//print the results of the game
		result: function(){
		clearInterval(timer);
		$("#bodyContent h2").remove();

		$("#bodyContent").html("<h2>You have finished!</h2>");
		$("#bodyContent").append("<h3>Correct Answers: " +this.correct+ "</h3>"); 
		$("#bodyContent").append("<h3>Incorrect Answers: " +this.incorrect+ "</h3>");
		//takes the correct and incorrect and subtracts that from the total number of questions. If any remaining add to unanswered
		$("#bodyContent").append("<h3>Unanswered: " +(questions.length-(this.incorrect+this.correct))+"</h3>");

	}
}