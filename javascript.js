var cor = localStorage.cor;
console.log(cor);
 if(cor !== '' && cor === 'black') {
        document.body.style.background = 'white';
    } else {
        document.body.style.background = 'white';
    }
function mudarCor() {
    var cor = localStorage.cor;
    console.log(cor);
    if(cor === 'black') {
        document.body.style.background = 'white';
        localStorage.cor = 'white';
        document.getElementById("box").style.backgroundColor = "rgb(150, 113, 185)";
        document.getElementById("box-circle1").style.stroke = " rgb(207, 207, 207)" ; 
        document.getElementById("box-circle2").style.stroke = "rgb(108, 54, 120)";
        document.getElementById("number-text").style.color = " rgb(207, 207, 207)" ;
        document.getElementById("text-p").style.color = "black";
    } else {
        document.body.style.background = 'black';
        localStorage.cor = 'black';
        document.getElementById("box").style.backgroundColor = "lightgray";
        document.getElementById("box-circle1").style.stroke = "gray";
        document.getElementById("box-circle2").style.stroke = "rgb(150, 113, 185)";
        document.getElementById("number-text").style.color = "rgb(108, 54, 120)";
        document.getElementById("text-p").style.color = " lightgray";

         
    }
}

function botaoMenu(){
    document.querySelector('.text-menu').classList.toggle('open')
    if( document.getElementById("ul-menu").style.visibility === "visible"){
        document.getElementById("ul-menu").style.visibility = "hidden"
    }else
    document.getElementById("ul-menu").style.visibility = "visible"
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 300;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);