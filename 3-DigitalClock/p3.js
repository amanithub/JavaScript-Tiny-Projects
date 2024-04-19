const time = document.getElementById("clockey")



setInterval(function(){
    let samay = new Date();
    time.innerHTML = samay.toLocaleTimeString();
},1000)