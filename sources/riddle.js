const generator = document.getElementById("generator");
const qmark = document.getElementById("marks");
qmark.addEventListener("click", randomQ);

function randomQ() {
    let rand = Math.floor(Math.random() * 100);
    if (rand < 10) {
        generator.textContent = "What belongs to you, but others will use it?"
    } else if (rand >= 10 && rand < 20) {
        generator.textContent = "I am always around but unseen. I am often avoided but never outrun. I could find you at the end of the road or even the next corner. What am I?"
    } else if (rand >= 20 && rand < 30) {
        generator.textContent = "I can be long, short, grown, bought, painted, left bare, round, or sqaure. What am I?"
    } else if (rand >= 30 && rand < 40) {
        generator.textContent = "What gets harder to catch the faster you run?"
    } else if (rand >= 40 && rand < 50) {
        generator.textContent = "I am first on earth and second in Heaven and appear twice per week. What am I?"
    } else if (rand >= 50 && rand < 60) {
        generator.textContent = "I have keys but no locks, I have space but no room, you can enter but not go outside. What am I?"
    } else if (rand >= 60 && rand < 70) {
        generator.textContent = "What has two hands, a rouund face, always runs, yet always stays in place, too?"
    } else if (rand >= 70 && rand < 80) {
        generator.textContent = "I like to dance, twist, and prance. I shake my tail as high as I sail away. I fly up into the sky. What am I?"
    } else if (rand >= 80 && rand < 90) {
        generator.textContent = "I sit in the corner while traveling around the world. What am I?"
    } else if (rand >= 90 && rand < 100) {
        generator.textContent = "When does a painter use a trigger instead of a brush?"
    }
    
}







