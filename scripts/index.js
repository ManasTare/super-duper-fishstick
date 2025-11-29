//Original Random Function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getLink() {
    return "https://www.pokemon.com/us/pokedex/" + getRandomInt(999);
}
function callme() {
    window.open(getLink())
}
function tool() {
    window.open(getLink(), "_blank", 'height=1000,width=150')
}