window.onload = function(){
    var sections = document.getElementsByClassName("section");
    var taille = window.innerHeight;
    var tailleLargeur = window.innerWidth;
    if(tailleLargeur < 769){
        for(let item of sections){
            item.style.height = taille + "px";
        }
    }
}