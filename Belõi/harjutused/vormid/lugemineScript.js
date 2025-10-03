function tervitus(){
    let vastus=document.getElementById("vastus");
    let nimi=document.getElementById("nimi")
    let aastat=document.getElementById("aastat");

    vastus.innerHTML="Tere tulemast ja vasta küsimustele "+
        nimi.value +"!" +
        " <br> Sa opid juba " +aastat.value + " aastat";
    vastus.style.color= "red"
}