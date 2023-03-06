let icons = document.querySelectorAll('.icons');
let title = document.querySelectorAll('.goals');
let num = document.querySelectorAll('.numbers');

fetch("data.json").then((response) =>{
    response.json().then((dados) =>{
        console.log(dados.goals[1].category);
        for (let i = 0; i < dados.goals.length; i++){
        icons[i].innerHTML += `<img src="${dados.goals[i].icon}"></img>`
        title[i].innerHTML += dados.goals[i].category;
        num[i].innerHTML += dados.goals[i].score;
        
        }

     
            });
});

