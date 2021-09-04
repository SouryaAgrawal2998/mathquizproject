var player1_name= localStorage.getItem("username1");
var player2_name= localStorage.getItem("username2");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML= player1_name+ " : ";
document.getElementById("player2_name").innerHTML= player2_name+ " : ";
document.getElementById("player1_name_score").innerHTML= player1_score;
document.getElementById("player2_name_score").innerHTML= player2_score;
document.getElementById("player_question").innerHTML="Question Turn- "+ player1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn- "+ player2_name;
function send() {
    number1 = document.getElementById("input_q1").value;
    number2 = document.getElementById("input_q2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("input_q1").value = "";
    document.getElementById("input_q2").value = "";
}
question_turn = "player_1";
answer_turn = "player_2";
function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "player_1") {
            update_player1_score = player1_score + 1;
            document.getElementById("player1_name_score").innerHTML = update_player1_score;
        } else {
            update_player2_score = player2_score + 1;
            document.getElementById("player2_name_score").innerHTML = update_player2_score;
        }
    }
console.log(player1_name);
console.log(player2_name);
if(question_turn == "player_1") {
    console.log("inside if");
    question_turn = "player_2";
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    console.log(question_turn);
    console.log(player2_name);
 } 
else {
    console.log("inside else");
    question_turn = "player_1";
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    console.log(question_turn);
    console.log(player1_name);
}
if(answer_turn == "player_1") {
    answer_turn = "player_2";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
 } 
else {
    answer_turn = "player_1";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
}
}