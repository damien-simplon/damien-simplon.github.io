window.onload = function(){
    var sections = document.getElementsByClassName("section");
    var headerCoteGauche = document.getElementById("headerCoteGauche");
    var headerCoteDroit = document.getElementById("headerCoteDroit");
    var interetGrid = document.getElementById("interetGrid");

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
    
    var contenu = document.getElementsByTagName("body");
    var bouton = document.getElementById("boutonDarkMode");
    var boutonI = bouton.getElementsByTagName("i");
    bouton.onclick = function(){
        for(let item of contenu){
            if(item.style.backgroundColor == "rgb(79, 78, 78)"){
                item.style.backgroundColor = "white";
                item.style.color = "black";
                bouton.style.border = "1px solid black";
                for(let item of boutonI){
                    item.style.color = "black";
                }
            }
            else{
                item.style.backgroundColor = "rgb(79, 78, 78)";
                item.style.color = "white";
                bouton.style.border = "1px solid white";
                for(let item of boutonI){
                    item.style.color = "white";
                }
            }
        }
    }

}