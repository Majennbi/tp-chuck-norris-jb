//1.T’auras besoin d’un tableau JS avec une dizaine de punchlines

let punchlines = [
    "Un jour, Chuck Norris a plongé dans la Mer Rouge. Moïse en a profité pour passer.",
    "Chuck Norris ne ment jamais, c'est la vérité qui se trompe.",
    "Chuck Norris ne s'est jamais rendu à l'école. Chuck Norris ne se rend jamais.",
    "Chuck Norris a joué au roi du silence avec un muet... et il a gagné.",
    "Chuck Norris peut cultiver un champ magnétique.",
    "Chuck Norris a réussi à trouver la page 404.",
    "Chuck Norris peut faire du feu en frottant deux glaçons.",
    "Tous les soirs, les cauchemars font le même Chuck Norris.",
    "Les Suisses ne sont pas neutres, ils attendent de savoir de quel côté Chuck Norris se situe.",
    "Chuck Norris est la raison pour laquelle Charlie se cache."
]

//2. Au click du bouton, tu récupéreras aléatoirement une de ces phrases et tu l’afficheras dans la boite blanche

//Récupérer aléatoirement punchline
let randomIndex = function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getRandomIndex() {
    //Afficher phrase aléatoire
    let randompunchline = punchlines[randomIndex(10)];
    //Afficher dans la boîte blanche
    let elRandomPunchline = document.getElementById("punchline");
    elRandomPunchline.innerHTML = randompunchline;
}

function ListenToCliks() {
    const btn = document.getElementById("generatorbtn");
    btn.addEventListener("click", getRandomIndex)
}

ListenToCliks();

//3. a. La méthode simple: Un tableau de couleurs (en Hexadécimal). Tu pioches dedans aléatoirement aussi

let colors = [
    "#F08080",
    "#616A6B ",
    "#21618C",
    "#117864",
    "#B03A2E",
    "#1C2833",
    "#B9770E",
    "#5B2C6F",
    "#2874A6",
    "#28B463",
]

let PickRandomColor = function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//Afficher dans la boîte blanche
function getRandomColor () {
    //Afficher couleur aléatoire
    let randomColor = colors[PickRandomColor(10)];
    //changer background color
    const changeBgcolor = document.getElementById("backgroundcolor");
    changeBgcolor.style.backgroundColor = randomColor;
    changeBgcolor.style.color = randomColor;
    
    const changeBgColorBtn = document.getElementById("generatorbtn");
    changeBgColorBtn.style.backgroundColor = randomColor;
}

function ListenToCliksColor () {
    
    const colorbtn = document.getElementById("generatorbtn");
    colorbtn.addEventListener('click', getRandomColor);
}

ListenToCliksColor();

