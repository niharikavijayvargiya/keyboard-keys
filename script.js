document.addEventListener('DOMContentLoaded', () => {
    const keyPressed = document.getElementById('keyPressed');
    const keyCode = document.getElementById('keyCode');
    const history = document.getElementById('history');

    let keyHistory = [];

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const code = event.keyCode;

        keyPressed.textContent = key;
        keyCode.textContent = code;

        keyHistory.push(`${key} (${code})`);
        updateHistory();

        // Play a sound on key press
        const audio = new Audio('keypress.mp3'); // Ensure keypress.mp3 file is in the same directory
        audio.play();

        // Change the color of the text briefly on key press
        keyPressed.style.color = '#f8c291';
        keyCode.style.color = '#f8c291';
        setTimeout(() => {
            keyPressed.style.color = '#ff6b6b';
            keyCode.style.color = '#ff6b6b';
        }, 300);
    });

    function updateHistory() {
        history.innerHTML = '';
        keyHistory.slice(-10).forEach(item => {
            const div = document.createElement('div');
            div.textContent = item;
            history.appendChild(div);
        });
    }
});
