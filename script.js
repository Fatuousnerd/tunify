var load = document.querySelector(".load");
loader = document.getElementById("loader"),
card = document.querySelectorAll(".card");

function search(){
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitem = document.getElementById("search-list");
    const card = document.querySelectorAll(".card");
    const pname = storeitem.getElementsByTagName("h2");

    for(i=0; i < pname.length; i++){
        let match = card[i].getElementsByTagName("h2")[0]

        if(match){
           let textvalue = match.textContent || match.innerHTML
           if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            card[i].style.display = ''
           } else{
            card[i].style.display = 'none'
           }
        }
    }
};

window.addEventListener('load', () => {
    load.style.display = 'none'
    //loader.style.display = 'none'
});

card.mouseover = () => {
    console.warn("Hovered!!")
}