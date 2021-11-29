const jenerator = document.getElementById("jenerator");
const jjoke = document.getElementById("joke");
jjoke.addEventListener("click", randomJ);

function randomJ() {
    let rand = Math.floor(Math.random() * 100);
    if (rand < 10) {
        jenerator.textContent = "JOKER"
    } else if (rand >= 10 && rand < 20) {
        jenerator.textContent = "Haven't you ever heard of the healing power of laughter?"
    } else if (rand >= 20 && rand < 30) {
        jenerator.textContent = "I believe whatever doesn't kill you, simply makes you stranger."
    } else if (rand >= 30 && rand < 40) {
        jenerator.textContent = "Why did the Joker call the sidekick of Batman a frog? Because he was Jason Toad!";
    } else if (rand >= 40 && rand < 50) {
        jenerator.textContent = "All it takes is one bad day to reduce the sanest man alive to lunacy. That's how far the world is from where I am. Just one bad day."
    } else if (rand >= 50 && rand < 60) {
        jenerator.textContent = "What would the Joker say if he had a memory problem? He would ask you, 'Do you know how I got these scars?'"
    } else if (rand >= 60 && rand < 70) {
        jenerator.textContent = "What do you say when the Joker lets you go as a hostage? That was a really nice jesture!"
    } else if (rand >= 70 && rand < 80) {
        jenerator.textContent = "When Robin went to buy some food at Joker's restaurant, the Joker refused to get him food because he had a crowbar!"
    } else if (rand >= 80 && rand < 90) {
        jenerator.textContent = "The Joker absolutely hates drinking this one beverage. It is called socie-tea!"
    } else if (rand >= 90 && rand < 100) {
        jenerator.textContent = "The Joker recently won a Nobel Prize in Physics. This was because he had done some ground-breaking work in Chaos Theory!?"
    }
    
}


console.log(jjoke.addEventListener("click", randomJ))