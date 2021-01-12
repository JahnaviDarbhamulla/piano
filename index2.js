
var numberofli =document.querySelectorAll("li").length;
for (var i = 0; i <numberofli ; i++) {

  document.querySelectorAll("li")[i].addEventListener("click", function() {



    var innerHTML = this.innerHTML;
    makeSound(innerHTML)
  });


  }
  document.addEventListener( "keypress",function(event) {
     makeSound(event.key);

  });
function makeSound(key){
      switch (key) {
        case "a":
          var c3 = new Audio("piano/c3.mp3")
          c3.play();
          break;

        case "z":
          var d3 = new Audio("piano/d3.mp3")
          d3.play();
          break;

        case "s":
          var e3 = new Audio("piano/e3.mp3")
          e3.play();
          break;

        case "x":
          var f3 = new Audio("piano/f3.mp3")
          f3.play();
          break;

        case "d":
          var g3 = new Audio("piano/g3.mp3")
          g3.play();
          break;

        case "c":
          var a3 = new Audio("piano/a3.mp3")
          a3.play();
          break;

        case "f":
          var b3 = new Audio("piano/b3.mp3")
          b3.play();
          break;
          case "v":
            var c4 = new Audio("piano/c4.mp3")
            c4.play();
            break;

          case "g":
            var d4 = new Audio("piano/d4.mp3")
            d4.play();
            break;

          case "b":
            var e4 = new Audio("piano/e4.mp3")
            e4.play();
            break;

          case "h":
            var f4 = new Audio("piano/f4.mp3")
            f4.play();
            break;

          case "n":
            var g4 = new Audio("piano/g4.mp3")
            g4.play();
            break;

          case "j":
            var a4 = new Audio("piano/a4.mp3")
            a4.play();
            break;

          case "m":
            var b4 = new Audio("piano/b4.mp3")
            b4.play();
            break;

            case "q":
              var c14 = new Audio("piano/c#4.mp3")
              c14.play();
              break;

            case "w":
              var d14 = new Audio("piano/d#4.mp3")
              d14.play();
              break;

            case "e":
            var f14 = new Audio("piano/f#4.mp3")
            f14.play();
            break;

            case "r":
            var g14 = new Audio("piano/g#4.mp3")
            g14.play();
            break;

            case "t":
            var a14 = new Audio("piano/a#4.mp3")
            a14.play();
            break;

            case "y":
              var c15 = new Audio("piano/c#5.mp3")
              c15.play();
              break;

            case "u":
              var d15 = new Audio("piano/d#5.mp3")
              d15.play();
              break;

            case "i":
            var f15 = new Audio("piano/f#5.mp3")
            f15.play();
            break;

            case "o":
            var g15 = new Audio("piano/g#5.mp3")
            g15.play();
            break;


            case "p":
            var a15 = new Audio("piano/a#5.mp3")
            a15.play();
            break;





        default:console.log(innerHTML);

      }
}
