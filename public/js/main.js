function an(element, contentC){
    var btn = document.getElementById("btnz");
    btn.style.left = "-100%";
    var b = document.getElementsByClassName('btn');
    for(i = 0; i < 4; i++)
    {
        b[i].disabled = true;
    }
    element.style.left = "0";
    setTimeout(function(){
        element.style.top = "0"; 
        element.style.height = "100vh";
    }, 1500);
    setTimeout(function(){
        document.getElementsByClassName('content')[contentC].style.display = "block";
    }, 2500);
}

function cl(element, contentC){
    element.style.top = "50%"; 
    element.style.height = "1vh";
    setTimeout(function(){
        element.style.left = "-100%";
    }, 1500);
    setTimeout(function(){
        var btn = document.getElementById("btnz");
        btn.style.left = "0";
        var b = document.getElementsByClassName('btn');
    for(i = 0; i < 4; i++)
    {
        b[i].disabled = false;
    }
    }, 1500);
    document.getElementsByClassName('content')[contentC].style.display = "none";
}