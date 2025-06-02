// 1 завдання
let count = 0;
const messageElement = document.querySelector(".message");
const interval = setInterval(()=>{
    count++;
    messageElement.textContent = `\u{41F}\u{43E}\u{432}\u{456}\u{434}\u{43E}\u{43C}\u{43B}\u{435}\u{43D}\u{43D}\u{44F} ${count}`;
    if (count === 5) clearInterval(interval);
}, 1000);
// 2 завдання
const squares = document.querySelectorAll('.square');
setInterval(()=>{
    squares.forEach((square)=>{
        square.style.top = `${Math.random() * window.innerHeight}px`;
        square.style.left = `${Math.random() * window.innerWidth}px`;
    });
}, 500);
// завдання 3
const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
let score = 0;
let timeLeft = 10;
target.addEventListener("click", ()=>{
    score++;
    scoreDisplay.textContent = score;
    target.style.top = `${Math.random() * window.innerHeight}px`;
    target.style.left = `${Math.random() * window.innerWidth}px`;
});
const timer = setInterval(()=>{
    timeLeft--;
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert(`\u{413}\u{440}\u{430} \u{437}\u{430}\u{43A}\u{456}\u{43D}\u{447}\u{435}\u{43D}\u{430}! \u{412}\u{430}\u{448} \u{440}\u{435}\u{437}\u{443}\u{43B}\u{44C}\u{442}\u{430}\u{442}: ${score} \u{43E}\u{447}\u{43E}\u{43A}`);
        target.remove();
    }
}, 1000);
// завдання 4
document.getElementById("startBtn").addEventListener("click", ()=>{
    setTimeout(()=>alert("\u0427\u0430\u0441 \u0432\u0438\u0439\u0448\u043E\u0432!"), document.getElementById("timeInput").value * 1000);
});

//# sourceMappingURL=timmer-hw.816e7b21.js.map
