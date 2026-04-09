const character = document.getElementById("character");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");

let score = 0;

// Zıplama fonksiyonu
function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
        // Animasyon bitince sınıfı kaldır ki tekrar zıplayabilsin
        setTimeout(() => {
            character.classList.remove("animate");
        }, 500);
    }
}

// Boşluk tuşuna basıldığında zıpla
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        jump();
    }
});

// Oyunu başlatmak için engele hareket verelim
obstacle.classList.add("obstacle-move");

// Çarpışma Kontrolü (Her 10ms'de bir kontrol eder)
let isDead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    // Engel karakterin altındayken karakter zıplamamışsa
    if (obstacleLeft < 90 && obstacleLeft > 50 && characterTop >= 150) {
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        alert("Kaybettin! Skorun: " + Math.floor(score));
        location.reload(); // Oyunu yeniden başlat
    } else {
        score += 0.01;
        scoreDisplay.innerHTML = "Skor: " + Math.floor(score);
    }
}, 10);