
var questionArray = [];
var min = 0;
var max = 16;
var finalSpeech = 0;

$(document).ready(function () {
    init();
});

function init() {

}

function randomQuestion(min, max){
    return Math.floor(Math.random()*(1 + max - min) + min);

}

        questionArray.push("Who is somebody you look up to and why?");
        questionArray.push("Talk about a blind date experience.");
        questionArray.push("What is your favorite movie and why?");
        questionArray.push("Talk about the best trip you ever took.");
        questionArray.push("Talk about your favorite memory of grandma's house.");
        questionArray.push("Talk about a famous person you have met.");
        questionArray.push("Talk about your first car you ever owned.");
        questionArray.push("What is the most proud moment in your life so far.");
        questionArray.push("If you won the lottery, what would be the first thing you bought and why?");
        questionArray.push("Are you a dog or cat person and why.");
        questionArray.push("Talk about the most embarrassing moment you have experienced.");
        questionArray.push("If you could go anywhere in the world, where would it be and why?");
        questionArray.push("Tell us about your best or worst vacation ever.");
        questionArray.push("What was one thing that you got away with as a teenager that your parents never knew?");
        questionArray.push("Crunchy or creamy peanut butter? Why?");
        questionArray.push("Tell us about a Homeowner/Renter nightmare.");
        questionArray.push("Give us three famous persons, living or dead, that you'd like to have a dinner party with and why them?");



function submitRandom(){
    finalSpeech = questionArray[randomQuestion(min, max)];

    $("#randomQuestion").text("Question: " + finalSpeech);
}





