//BUSINESS LOGIC

function Player(name, turnScores, totalScores) {
  this.name = name;
  this.turnScores = turnScores;
  this.totalScores = totalScores;
}

function roll() {
  return Math.floor(Math.random()*6)+1;
}










//UI LOGIC
$(document).ready(function () {
  $("form#player-1").submit(function (event) {
    event.preventDefault();
    let player1 = $("input#name1").val();
    $("input#name1").hide();
    $(".btn1").hide();
    $("label#showName1").text("Player Name: " + player1);
    $("#roll, #hold").show();

    $("#roll").click(function () {
      $("button#show").text(roll());
      console.log(roll());
    })


  })

})
