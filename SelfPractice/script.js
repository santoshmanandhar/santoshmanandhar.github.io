window.onload = function(){
    //on click event
    // document.getElementById("submit").onclick = submitClickEvent;

    //on form submit event
    document.getElementById("mainForm").onsubmit = submitClickEvent;
}

function submitClickEvent(){
    let pass = document.getElementById("pwd").value;
    console.log(pass);
}

