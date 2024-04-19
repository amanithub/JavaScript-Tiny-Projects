const btn = document.querySelectorAll('.button')
const body = document.querySelector("body")

btn.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(ent){
        console.log(ent)
        console.log(ent.target);
        if(ent.target.id == 'grey')
        body.style.backgroundColor = ent.target.id;
    else if(ent.target.id == 'white')
    body.style.backgroundColor = ent.target.id;
    else if(ent.target.id == 'yellow')
    body.style.backgroundColor = ent.target.id;
    else if(ent.target.id == 'blue')    
    body.style.backgroundColor = ent.target.id;
    else if(ent.target.id == 'purple')
    body.style.backgroundColor = ent.target.id;
    })
})