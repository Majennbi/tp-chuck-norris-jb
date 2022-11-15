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

let randompunchline = punchlines[randomIndex(10)];


//Afficher dans la boîte blanche
let elRandomPunchline = document.getElementById("punchline");

elRandomPunchline.textContent = randompunchline;


function getRandomIndex() {
    let newPunch = document.getElementById ("punchline")
    newPunch.style.display = "block";
}

let generatorbtn = document.getElementById("generatorbtn");
generatorbtn.addEventListener("click", getRandomIndex)

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
