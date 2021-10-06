window.onload = function(){
    var headerCoteGauche = document.getElementById("headerCoteGauche");
    var headerCoteDroit = document.getElementById("headerCoteDroit");
    
    var taille = window.innerHeight;
    var tailleLargeur = window.innerWidth;

    if(tailleLargeur < 769){
        headerCoteGauche.style.height = taille + "px";
        headerCoteDroit.style.height = taille + "px";
    }
}