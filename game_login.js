function login() {
player1name=document.getElementById("player1_name_input").value;
player2name=document.getElementById("player2_name_input").value;
localStorage.setItem("player1namekey",player1name);
localStorage.setItem("player2namekey",player2name);
window.location="game_page.html";
}