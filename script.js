// script.js
let petalCount = 14;
let currentName = 'Vera';

document.addEventListener('DOMContentLoaded', () => {
    const daisy = document.getElementById('daisy');
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.transform = `rotate(${i * (360 / petalCount)}deg) translateY(-70%)`;
        daisy.appendChild(petal);
    }
});

function removePetal() {
    const daisy = document.getElementById('daisy');
    if (petalCount > 0) {
        const petals = daisy.getElementsByClassName('petal');
        const randomIndex = Math.floor(Math.random() * petals.length);
        const petal = petals[randomIndex];
        petal.classList.add('petal-fade-grow');
        toggleName(); 
        daisy.removeChild(petal);
        petalCount--;   

        if (petalCount === 0) {
            document.getElementById('name').classList.add('double-size');
            daisy.remove(); // Elimina el elemento daisy
            document.getElementById('name').innerText ='¡Leo!';

        }   
}
}

function toggleName() {
    currentName = currentName === 'Vera' ? 'Leo' : 'Vera';
    document.getElementById('name').innerText = currentName;
}
