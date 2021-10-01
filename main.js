window.onload = function(){
    var sections = document.getElementsByClassName("section");
    var taille = window.innerHeight;
    console.log(sections);
    console.log(taille);
    for(let item of sections){
        item.style.height = taille + "px";
    }
}