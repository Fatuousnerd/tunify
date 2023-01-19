var load = document.querySelector(".load"),
loader = document.getElementById("loader"),
artists = document.getElementById("artists"),
artistlist = document.getElementById("artist-list"),
player = document.getElementById("player"),
art = document.getElementById("art"),
tr = document.getElementById("tr"),
img = document.getElementById("img"),
nm = document.getElementById("nm"),
card = document.querySelectorAll(".card"),
icn = document.querySelectorAll(".icn"),
hie = document.querySelectorAll("h2"),
currentIndex = 0;
pname = artistlist.getElementsByTagName("h2");

function search(){
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitem = document.getElementById("artist-list");
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

let recentSearches = [];
    
function addSearch(query) {
  recentSearches.unshift(query);
  updateList();
}

function updateList() {
  let list = document.getElementById("recent-searches");
  list.innerHTML = "";
  for (let i = 0; i < recentSearches.length; i++) {
    let item = document.createElement("li");
    item.textContent = recentSearches[i];
    list.appendChild(item);
  }
}

artists.onclick = () => {
  artistlist.classList.toggle("none")
}

card.forEach(function(card) {
  card.onmouseover = () => {
     // icn.classList.remove("none")
  }
  card.onclick = (e) => {
    if(e.target.innerText.includes('Lil Durk')){
      img.src = durkioo[currentIndex].img;
      art.textContent = durkioo[currentIndex].ar
      tr.textContent = durkioo[currentIndex].track
      player.src = durkioo[currentIndex].song
      nm.innerText = (currentIndex + 1) + " of " + durkioo.length;
    } else if(e.target.innerText.includes('King Von')){
      img.src = von[currentIndex].img;
      art.textContent = von[currentIndex].ar
      tr.textContent = von[currentIndex].track
      player.src = von[currentIndex].song
    }
    else if(e.target.innerText.includes('Aj Shabeel')){
      img.src = aj[currentIndex].img;
      art.textContent = aj[currentIndex].ar
      tr.textContent = aj[currentIndex].track
      player.src = aj[currentIndex].song
    }
  }
});

function play() {
  if(player.paused == true){
    player.play()
  } else{
    player.pause()
  }
}

function prev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = durkioo.length - 1;
  }
  player.src = durkioo[currentIndex];
  play();
}

function next() {
  currentIndex++;
  if (currentIndex >= durkioo.length) {
    currentIndex = 0;
  }
  player.src = durkioo[currentIndex];
}