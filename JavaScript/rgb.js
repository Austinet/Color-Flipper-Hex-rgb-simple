  const btn = document.getElementById("btn");
  const color = document.querySelector(".color");
  const colors=[];
  for (let i=0; i<=255; i++){
        colors.push(i);
  }


  btn.addEventListener("click", ()=> {
    let colorValue = " rgba(";
    let wrap =") ";
    
    for(let i=0; i<3; i++){
      colorValue +=getRandomValue() + ",";  
    }
    colorValue +=( Math.random().toFixed(1) + wrap );
    
    document.body.style.backgroundColor = colorValue;
    color.textContent = colorValue;
    color.style.color=colorValue;
  });

  function getRandomValue() {
    return Math.floor(Math.random() * colors.length);
  }