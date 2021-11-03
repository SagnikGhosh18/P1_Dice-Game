var str = prompt("Start simulation?- (Y/N)");

if(str=="Y")
{
  var arr1 = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

  var random1 = Math.ceil(Math.random()*6);
  document.querySelector(".img1").setAttribute("src",arr1[random1 -1]);

  var random2 = Math.ceil(Math.random()*6);
  document.querySelector(".img2").setAttribute("src",arr1[random2 -1]);

  if(random1===random2)
  {
    document.querySelector("h1").innerHTML="It's a draw!🙌";
  }
  else if (random1<random2)
  {
    document.querySelector("h1").innerHTML="Player 2 wins!🏁";
  }
  else
  {
    document.querySelector("h1").innerHTML="🏁 Player 1 wins!";
  }
}
