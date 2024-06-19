$(document).ready(function(){
    var ai = document.getElementById('home-ai');
    var typewriter = new Typewriter(ai, {
        loop: true,
        delay: 75,
      });

      typewriter
      .typeString('Artificial Intelligence')
      .pauseFor(1000) 
      .deleteChars(24)
      .typeString("Automation")
      .pauseFor(1000) 
      .deleteChars(11)
      .typeString("Data Modernization")
      .pauseFor(1000) 
      .deleteChars(20)
      .start();

      setHeight()
});


function setHeight(){
  var heightofdiv = $(".height1").height();
  $(".height2").height(heightofdiv);
}
