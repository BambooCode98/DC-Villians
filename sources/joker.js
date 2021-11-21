const jenerator = document.getElementById("jenerator");
const jjoke = document.getElementById("joke");
jjoke.addEventListener("click", randomJ);

function randomJ() {
    let rand = Math.floor(Math.random() * 100);
    if (rand < 10) {
        jenerator.textContent = "CRAZY"
    } else if (rand >= 10 && rand < 20) {
        jenerator.textContent = "CRAZIER"
    } else if (rand >= 20 && rand < 30) {
        jenerator.textContent = "CRAZIEST"
    } else if (rand >= 30 && rand < 40) {
        jenerator.textContent = "What gets harder to catch the faster you run?"
    } else if (rand >= 40 && rand < 50) {
        jenerator.textContent = "I am first on earth and second in Heaven and appear twice per week. What am I?"
    } else if (rand >= 50 && rand < 60) {
        jenerator.textContent = "I have keys but no locks, I have space but no room, you can enter but not go outside. What am I?"
    } else if (rand >= 60 && rand < 70) {
        jenerator.textContent = "What has two hands, a rouund face, always runs, yet always stays in place, too?"
    } else if (rand >= 70 && rand < 80) {
        jenerator.textContent = "I like to dance, twist, and prance. I shake my tail as high as I sail away. I fly up into the sky. What am I?"
    } else if (rand >= 80 && rand < 90) {
        jenerator.textContent = "I sit in the corner while traveling around the world. What am I?"
    } else if (rand >= 90 && rand < 100) {
        jenerator.textContent = "When does a painter use a trigger instead of a brush?"
    }
    
}


console.log(jjoke.addEventListener("click", randomJ))