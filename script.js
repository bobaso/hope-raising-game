const buttons = document.querySelectorAll(".menuButton");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        console.log(button.innerText);

    });

});
