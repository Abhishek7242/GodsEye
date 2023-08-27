let bName = document.getElementById('bName');
let aName = document.getElementById('aName');
let search = document.getElementById('search');
let input = document.getElementById('input');
let image = document.getElementById('image');
bName.innerText = bName.innerText.toUpperCase();

function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    return `rgb(${red}, ${green}, ${blue})`;
}

// Clear existing content
let newContent = '';
for (let char of bName.innerText) {
    newContent += `<span style="color: ${generateRandomColor()}">${char}</span>`;
}

bName.innerHTML = newContent;


search.addEventListener('click', () => {
    if (input.value == '') {
    }
    else if(input.value=='most beautiful girl in the universe'){
        window.location.href = 'S.html';
    }
})


