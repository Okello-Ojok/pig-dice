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

Player.prototype.roll = function() {
  let dice = Math.floor(Math.random() * 6) + 1;

  if (dice === 1) {

    sumScore.push(score);
    return score;
  } else {
    sumScore.push(dice);
  }
  turnScore = sumScore.reduce((a, b) => a + b, 0);
  return turnScore;
};


function hold() {
  return totalScore = totalScore + turnScore;
}



//UI LOGIC
$(document).ready(function() {
  $("form#player-1").submit(function(event) {
    event.preventDefault();

    let player1 = $("input#name1").val();


    let newPlayer1 = new Player(player1, turnScore, totalScore);

    $("input#name1").hide();
    $(".btn1").hide();
    $("label#showName1").text("Player Name: " + newPlayer1.name);
    $("#roll, #hold").show();

    $("#roll").click(function() {
      //newPlayer1.diceRoll1();
      $("#hold2").prop('disabled', true)
      $("#roll2").prop('disabled', true);

      //newPlayer1.roll();
      $("button#show").text(newPlayer1.roll());
      //alert(newPlayer1.win());

      //console.log(roll());
      console.log(sumScore);
    })
    $("#hold").click(function() {
      $("button#tot").text(hold());
      $("#roll").prop('disabled', true);
      $(this).prop('disabled', true);
      $("#roll2").prop('disabled', false);
      $("#hold2").prop('disabled', false);

    })


  })



  //PLAYER 2
  $("form#player-2").submit(function(event) {
    event.preventDefault();

    let player2 = $("input#name2").val();

    let newPlayer2 = new Player(player2, turnScore, totalScore);


    $("input#name2").hide();
    $(".btn2").hide();
    $("label#showName2").text("Player Name: " + newPlayer2.name);
    $("#roll2, #hold2").show();

    $("#roll2").click(function() {
      $("button#show").text(newPlayer2.roll());
      $("#roll").prop('disabled', true);
      $("#hold").prop('disabled', true);
      //console.log(roll());
      console.log(sumScore);
    })
    $("#hold2").click(function() {
      $("button#tot").text(hold());
      $("#roll2").prop('disabled', true);
      $(this).prop('disabled', true);
      $("#roll").prop('disabled', false);
      $("#hold").prop('disabled', false);
      //$("#roll2").prop('disabled', true);
      //$(this).prop('disabled', true);

    })

  })



})
