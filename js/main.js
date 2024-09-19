const nom = "Chambolle";
const prenom = "Timothe";
const concat = nom.concat(' ',prenom);
const header1 = document.getElementById("hd")
console.log(concat);

function alerting_name() {
    alert(concat);
}

function display_information() {
    document.getElementById("full-name").innerHTML = concat;
    document.getElementById("full-name").style.display = "block";
}

const disp = display_information;

document.addEventListener("DOMContentLoaded", function() {
    let header1 = document.getElementById("hd");
    header1.addEventListener('click',disp);
    }); 

document.getElementById("submit-button").addEventListener("click", function() {
    var name = document.getElementById("name")
})