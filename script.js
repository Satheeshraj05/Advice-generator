const adviceNumber = document.getElementById('advice-number');
const adviceText = document.getElementById('advice-text');
const diceButton = document.getElementById('dice-button');

async function getAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    
    adviceNumber.textContent = data.slip.id;
    adviceText.style.animation = 'none';
    adviceText.offsetHeight; // Trigger reflow
    adviceText.style.animation = null;
    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.error('Error fetching advice:', error);
    adviceText.textContent = 'An error occurred while fetching advice. Please try again.';
  }
}

diceButton.addEventListener('click', getAdvice);

// Load initial advice
getAdvice();