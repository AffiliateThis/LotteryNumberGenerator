$(document).ready(function() {
  var theLetters = "12435647487589509584647904848474098#%&^+=-"; //You can customize what letters it will cycle through
  var ctnt = "Welcome"; // Your text goes here
  var speed = 40; // ms per frame
  var increment = 8; // frames per step. Must be >2

  var clen = ctnt.length;
  var si = 0;
  var stri = 0;
  var block = "";
  var fixed = "";
  //Call self x times, whole function wrapped in setTimeout
  (function rustle(i) {
    setTimeout(function() {
      if (--i) {
        rustle(i);
      }
      nextFrame(i);
      si = si + 1;
    }, speed);
  })(clen * increment + 1);
  function nextFrame(pos) {
    for (var i = 0; i < clen - stri; i++) {
      //Random number
      var num = Math.floor(theLetters.length * Math.random());
      //Get random letter
      var letter = theLetters.charAt(num);
      block = block + letter;
    }
    if (si == increment - 1) {
      stri++;
    }
    if (si == increment) {
      // Add a letter;
      // every speed*10 ms
      fixed = fixed + ctnt.charAt(stri - 1);
      si = 0;
    }
    $("#output").html(fixed + block);
    block = "";
  }
});

// add a function that tracks button click for the lotto number generator

$(document).ready(function() {
  $("#random-button").on("click", function() {
    // need a string for the purpose of capturing the number

    var lottoNumber = "";

    //  a loop is required to make separate numbers 0-9.  The loop settins can determine how many digits it displays.

    for (var i = 0; i < 10; i++) {
      //  Each iteration of the loop needs to generate a number 0-9.

      var random = Math.floor(Math.random() * 10);

      //   This number needs to be added to rest of the string

      lottoNumber = lottoNumber + random;
    }

    //   The random number needs to be delivered random div

    $("#random-number").append("<br><hr>" + lottoNumber);
  });
});
