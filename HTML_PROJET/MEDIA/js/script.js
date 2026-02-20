function goToQuiz() {
    var res = confirm("Voulez-vous vraiment faire le quiz ?");
    if(res){
        window.location.href = "quiz.html";
    }
}




function demarrerQuiz() {
    alert("Vous êtes sur le point de commencer le quiz !");
    var res = confirm("Etes-vous sûr de vouloir continuer ?");
    if(res){
        alert("Le quiz va commencer dans 5 secondes !");
        var timer = 5;
        var confirmation = document.createElement("p");
        confirmation.textContent = timer + " secondes";
        confirmation.style.color = "red";
        confirmation.style.fontSize = "1.5em";
        confirmation.style.fontWeight = "bold";
        confirmation.style.textAlign = "center";
        document.querySelector(".BoutonQuiz").after(confirmation);
        var interval = setInterval(function(){
            timer--;
            confirmation.textContent = timer + " secondes";
            if(timer == 0){
                clearInterval(interval);
                confirmation.textContent = "C'est parti ! Bonne chance !";
                document.getElementById("quizMinecraft").style.display = "block";
                document.getElementsByClassName("BoutonQuiz")[0].disabled = true;
            }
        },1000);
    } else {
        alert("Vous allez être redirigé vers la page d'accueil !");
        window.location.href = "accueil.html";
    }
}



let essai = 0;

function submitQuiz() {
    let score = 0;

    if(document.getElementById("q1b").checked){ 
        score += 10; 
    }
    if(document.getElementById("q2b").checked){ 
        score += 10; 
    }
    if(document.getElementById("q3a").checked){ 
        score += 10; 
    }
    if(document.getElementById("q4a").checked){
         score += 10; 
    }
    if(document.getElementById("q5a").checked){ 
        score += 10; 
    }


    let resultat = document.getElementById("result");
    let tbody = resultat.getElementsByTagName("tbody")[0];
    essai++;
    tbody.innerHTML += "<tr><td>" + essai + "</td><td>" + score + "</td></tr>";
    
    document.getElementById("result").style.display = "table";
    document.getElementById("titreResult").style.display = "block";


}

