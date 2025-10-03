//checkbox valikud
function valiAnsambel(){
    let abba=document.getElementById('abba');
    let the=document.getElementById('the');
    let system=document.getElementById('system');
    let lemon=document.getElementById('lemon');
    let vastus=document.getElementById('vastus');

    let valik="";

    if(abba.checked){
        valik+=abba.value+", ";
    }
    if(the.checked){
        valik+=the.value+", ";
    }
    if(system.checked){
        valik+=system.value+", ";
    }
    if(lemon.checked){
        valik+=lemon.value+", ";
    }


    vastus.innerHTML="Sinu valitud muusikud:"+valik;
    vastus.style.color="red";
}
function minuArvamus(){
    let arvamus=document.getElementById('arvamus');
    let vastus2=document.getElementById('vastus2');

        vastus2.innerHTML="Sinu arvamus:"+arvamus.value;
        vastus2.style.color="red";


}
function tundiMuusika(){
    let tundi=document.getElementById('tundi');
    let vastus3=document.getElementById('vastus3');
    vastus3.innerHTML="Sa kuulad muusikat  "+tundi.value+"  tundi päevas";
    vastus3.style.color="red";
}
function radioValik(){
    let yes=document.getElementById('yes');
    let no=document.getElementById('no');
    let vastus4=document.getElementById('vast4');

    if(yes.checked){
        vastus4.innerHTML="Raadio kuulamine: Jah";
        vastus4.style.color="red";
    }
    else if(no.checked){
        vastus4.innerHTML="Raadio kuulamine: Ei";
        vastus4.style.color="red";
    }
    else{
        vastus4.innerHTML="Tee oma valiku!";
        vastus4.style.color="red";
    }
}
function puhasta(){
    let abba=document.getElementById('abba');
    let the=document.getElementById('the');
    let system=document.getElementById('system');
    let lemon=document.getElementById('lemon');
    let vastus=document.getElementById('vastus');

    abba.checked=false;
    the.checked=false;
    system.checked=false;
    lemon.checked=false;
    vastus.innerText="";
}
function saada(){
    let vastuskokku=document.getElementById('vastus');
    vastuskokku.innerHTML=arvamus.value+", "+ valik.value+...;
}