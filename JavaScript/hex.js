   const btn = document.querySelector(".btn");
   const color=document.querySelector(".color");
   const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

   btn.addEventListener('click', () => {
      let randomValue= getRandomValue();
      let colorValues="#";

         for(let i = 0; i < 6; i++){
            randomValue= getRandomValue();
            colorValues+=hex[randomValue];
         }
      
      document.body.style.backgroundColor=colorValues;
      color.textContent=colorValues;
      color.style.color=colorValues;
   });


   function getRandomValue (){
      return Math.floor(Math.random() * hex.length);
   }

