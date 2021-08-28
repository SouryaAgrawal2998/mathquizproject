username1= "";
username2="";
function addUser(){
    username1=document.getElementById("player1_name_input").value;
    localStorage.setItem("username1", username1);
    username2=document.getElementById("player2_name_input").value;
    localStorage.setItem("username2", username2);
    window.location= "quiz-game-page.html";
}