function setWindow(){
    var sections = document.getElementsByClassName("section");
    var taille = window.innerHeight;
    console.log(sections);
    console.log(taille);
    for(let item of sections){
        console.log("test");
        item.style.height = taille + "px";
    }
}

setWindow();