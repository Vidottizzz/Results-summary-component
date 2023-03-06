let icons = document.querySelectorAll('.icons');
let title = document.querySelectorAll('.goals');

fetch("data.json").then((response) =>{
         response.json().then((dados) =>{
        dados.goals.map((usuario) => {
            
            icons[0].innerHTML += `<img src="${usuario.icon}"></img>`;
                console.log(usuario.category);       
                console.log(usuario.icon);       
                console.log(usuario.score);       
                title[0].innerHTML += usuario.category;
             
                                     })
        // icons.innerHTML = ;
    });
});
