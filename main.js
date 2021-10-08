window.onload = function(){
    var sections = document.getElementsByClassName("section");
    var headerCoteGauche = document.getElementById("headerCoteGauche");
    var headerCoteDroit = document.getElementById("headerCoteDroit");
    var interetGrid = document.getElementById("interetGrid");

    var header = document.getElementsByTagName("header");

    var taille = window.innerHeight;
    var tailleLargeur = window.innerWidth;

    if(tailleLargeur < 769){
        for(let item of sections){
            item.style.height = taille + "px";
            item.style.width = tailleLargeur + "px";
        }
        headerCoteGauche.style.height = taille + "px";
        headerCoteGauche.style.width = tailleLargeur + "px";

        headerCoteDroit.style.height = taille + "px";
        headerCoteDroit.style.width = tailleLargeur + "px";

        interetGrid.style.height = tailleLargeur + "px";
    }
}