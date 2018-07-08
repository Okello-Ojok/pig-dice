//BUSINESS LOGIC
let score = 0;
let turnScore = 0
let totalScore = 0;
let sumScore = [];

function Player(name, turnScores, totalScores) {
  this.name = name;
  this.turnScores = turnScores;
  this.totalScores = totalScores;
}

function roll() {


  let dice = Math.floor(Math.random() * 6) + 1;

  if (dice === 1) {
    //return score;
    sumScore.push(score);
  } else {
    //return turnScore = turnScore + dice;
    sumScore.push(dice);

  }
  //return sumScore;
  turnScore = sumScore.reduce((a, b) => a + b, 0);
  return turnScore;
}

function hold() {
  return totalScore = totalScore + turnScore;
}








//UI LOGIC
$(document).ready(function() {
  $("form#player-1").submit(function(event) {
    event.preventDefault();
    let player1 = $("input#name1").val();
    $("input#name1").hide();
    $(".btn1").hide();
    $("label#showName1").text("Player Name: " + player1);
    $("#roll, #hold").show();

    $("#roll").click(function() {
      $("button#show").text(roll());
      
      //console.log(roll());
      console.log(sumScore);
    })
    $("#hold").click(function () {
      $("button#tot").text(hold());
      $("#roll").prop('disabled', true);
      $(this).prop('disabled', true);

    })


  })




})
