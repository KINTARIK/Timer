const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
let intervalId;

function formatTime(time) {
const hours = Math.floor(time / 3600).toString().padStart(2, '0');
const minutes = (Math.floor(time / 60) % 60).toString().padStart(2, '0');
const seconds = (time % 60).toString().padStart(2, '0');

return `${hours}:${minutes}:${seconds}`;
}

return (seconds) => {
let remainingTime = seconds;
timerEl.textContent = formatTime(remainingTime);
intervalId = setInterval(() => {
remainingTime--;
if (remainingTime >= 0) {
timerEl.textContent = formatTime(remainingTime);
} else {
clearInterval(intervalId);
}
}, 1000);
};
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
inputEl.value = inputEl.value.replace(/[^\d]/g, '');
});

buttonEl.addEventListener('click', () => {
const seconds = Number(inputEl.value);
animateTimer(seconds);
inputEl.value = '';
});
