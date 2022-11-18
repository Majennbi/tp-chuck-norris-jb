//1.T’auras besoin d’un tableau JS avec une dizaine de punchlines

const punchlines = [
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
const randomIndex = function getRandomInt(max) {
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

/*let colors = [
    "#F08080",
    "#616A6B ",
    "#21618C",
    "#117864",
    "#B03A2E",
    "#1C2833",
    "#B9770E",
    "#5B2C6F",
    "#2874A6",
    "#28B463",]

function getRandomColor () {
    //Afficher couleur aléatoire
    let randomColor = colors[randomIndex(10)];
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

ListenToCliksColor();*/

//3.b. Méthode compliqué
     
 function getRandomRGB () {
    //i. Tu génères 3 nombres entre 0 et 255.
    const R = randomIndex(256);
    const G = randomIndex(256);
    const B = randomIndex(256);
    //ii. Ca sera tes couleurs R, G et B.
    //iii. Tu l’exploites grâce à la propriété css `rgb(x,y,z)`
    const randomRGB= `rgb(${R}, ${G}, ${B})`;
    
    const changeBgcolor = document.getElementById("backgroundcolor");
    changeBgcolor.style.backgroundColor = randomRGB;
    changeBgcolor.style.color = randomRGB;
    
    const changeBgColorBtn = document.getElementById("generatorbtn");
    changeBgColorBtn.style.backgroundColor = randomRGB;
}

function ListenToCliksRGB () {
    
    const colorbtn = document.getElementById("generatorbtn");
    colorbtn.addEventListener('click', getRandomRGB);
}

ListenToCliksRGB();