window.onload = function(){
    var headerBanniere = document.getElementsByClassName("banniere");
    var headerCoteGauche = document.getElementById("headerCoteGauche");

    var taille = window.innerHeight;
    var tailleLargeur = window.innerWidth;

    if(tailleLargeur < 769){
        for(let item of headerBanniere){
            item.style.height = taille + "px";
        }
        headerCoteGauche.style.height = taille + "px";
        headerCoteGauche.style.width = tailleLargeur + "px";
    }
}