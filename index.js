document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.querySelector('.container-click-area__button');
    const clickArea = document.querySelector('.container-click-area');
    const timerDisplay = document.getElementById('timer');
    const clicksDisplay = document.getElementById('clicks');
    const scoreDisplay = document.getElementById('score');
    const timerResult = document.getElementById('timer1');
    const clicksResult = document.getElementById('clicks1');
    const scoreResult = document.getElementById('score1');
    const animalResult = document.getElementById('animal1');
    const resultContainer = document.querySelector('.container-areaC:last-child');

    let clicks = 0;
    let startTime;
    let interval;

    clickButton.addEventListener('click', () => {
        clickButton.style.display = 'none';
        startTest();
    });

    clickArea.addEventListener('click', () => {
        clicks++;
    });

    function startTest() {
        clicks = 0;
        startTime = Date.now();
        updateDisplays();
        interval = setInterval(updateDisplays, 1);
        setTimeout(endTest, 5000);
    }

    function updateDisplays() {
        const elapsedTime = (Date.now() - startTime) / 1000;
        const cps = (clicks / elapsedTime).toFixed(2);
        timerDisplay.textContent = elapsedTime.toFixed(3);
        clicksDisplay.textContent = clicks;
        scoreDisplay.textContent = cps;
    }

    function endTest() {
        clearInterval(interval);
        const elapsedTime = (Date.now() - startTime) / 1000;
        const cps = (clicks / elapsedTime).toFixed(1);
        timerResult.textContent = elapsedTime.toFixed(2);
        clicksResult.textContent = clicks;
        scoreResult.textContent = cps;
        animalResult.textContent = getAnimal(cps);
        resultContainer.style.display = 'flex';
        setTimeout(() => {
            clickButton.style.display = 'block';
        }, 1000);
    }

    function getAnimal(cps) {
        if (cps < 1) {
            return 'Turtle';
        } else if (cps < 2) {
            return 'Rabbit';
        } else if (cps < 3) {
            return 'Cheetah';
        } else if (cps < 4) {
            return 'Fox';
        } else if (cps < 5) {
            return 'Wolf';
        } else if (cps < 6) {
            return 'Lion';
        } else if (cps < 7) {
            return 'Tiger';
        } else if (cps < 8) {
            return 'Panther';
        } else if (cps < 9) {
            return 'Leopard';
        } else if (cps < 10) {
            return 'Eagle';
        } else if (cps >= 10) {
            return 'Falcon';
        }
    }
    

    window.clickAnimation = function(event) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        clickArea.appendChild(circle);
    
        const x = event.clientX - clickArea.getBoundingClientRect().left;
        const y = event.clientY - clickArea.getBoundingClientRect().top;
    
        circle.style.left = `${x-50}px`;
        circle.style.top = `${y-50}px`;
    
        circle.animate([
          { transform: 'scale(0)', opacity: 1 },
          { transform: 'scale(0.5)', opacity: 0 }
        ], {
          duration: 500,
          easing: 'ease-out'
        });
    
        setTimeout(() => {
          circle.remove();
        }, 500);
    };

});