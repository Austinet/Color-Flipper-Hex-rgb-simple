    const btn = document.querySelector(".btn");
    const color = document.querySelector(".color");
    const colors = ["green", "red", "blue", "pink","crimson", "violet","brown","yellow","orange","aqua","grey"];


    btn.addEventListener('click', () => {
    let randomValue= getRandomValue();
        document.body.style.backgroundColor=colors[randomValue];
        color.textContent=colors[randomValue];
        color.style.color=colors[randomValue];
    });


    function getRandomValue (){
        return Math.floor(Math.random() * colors.length);
    }
