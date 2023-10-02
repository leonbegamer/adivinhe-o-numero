// geração do valor aleatório
var y =Math.floor(Math.random() * 10+1);

var guess=1
function submit(){
    var x=document.getElementById("guessField").value;
    if (x==y)
    {
        alert("Parabens!!!!!" +player_name+ ",você acertou em"+guess+ "tentativa(s)!!!");
        guess=1;
    }

    else if(x>y)
    {
        guess++;
        alert("errou.Tente um numero menor");


    }
    else
    {
        guess++;
        alert("errou tente um numero maior")
    }

}
function playAgin()
{
    y =Math.floor(Math.random() * 10+1);
}