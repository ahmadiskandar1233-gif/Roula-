const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const card = document.querySelector('.card');
const celebration = document.getElementById('celebration');
const resetBtn = document.getElementById('resetBtn');

let currentSize = 1;
let clickCount = 0;

noBtn.addEventListener('click', function() {
    clickCount++;
    currentSize += 0.3;
    
    // Grow the Yes button
    yesBtn.style.transform = `scale(${currentSize})`;
    
    // Optional: Move the No button away
    const randomX = (Math.random() - 0.5) * 100;
    const randomY = (Math.random() - 0.5) * 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

yesBtn.addEventListener('click', function() {
    // Hide the card
    card.classList.add('hidden');
    
    // Show celebration
    celebration.classList.remove('hidden');
});

resetBtn.addEventListener('click', function() {
    // Reset everything
    celebration.classList.add('hidden');
    card.classList.remove('hidden');
    
    currentSize = 1;
    clickCount = 0;
    yesBtn.style.transform = 'scale(1)';
    noBtn.style.transform = 'translate(0, 0)';
});