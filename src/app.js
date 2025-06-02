// 1 завдання
let count = 0;
const messageElement = document.querySelector(".message");

const interval = setInterval(() => {
    count++;
    messageElement.textContent = `Повідомлення ${count}`;
    
    if (count === 5) {
        clearInterval(interval);
    }
}, 1000);

// 2 завдання

const squares = document.querySelectorAll('.square');
setInterval(() => {
    squares.forEach(square => {
        square.style.top = `${Math.random() * window.innerHeight}px`;
        square.style.left = `${Math.random() * window.innerWidth}px`;
      
    });
}, 500);

// завдання 3
const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
let score = 0;
let timeLeft = 10;

target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    target.style.top = `${Math.random() * window.innerHeight}px`;
    target.style.left = `${Math.random() * window.innerWidth}px`;
});

const timer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert(`Гра закінчена! Ваш результат: ${score} очок`);
        target.remove();
    }
}, 1000);

// завдання 4
document.getElementById("startBtn").addEventListener("click", () => {
    setTimeout(() => alert("Час вийшов!"), document.getElementById("timeInput").value * 1000);
});



