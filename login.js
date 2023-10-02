// Crie a função login aqui.
function Login()
{
    player_name=document.getElementById("player_name").value;
    localStorage.setItem("player_name", player_name);
    
    window.location = "gamepage.html";
}
 
