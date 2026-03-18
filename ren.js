function showSection(id){

let sections=document.querySelectorAll(".section");

sections.forEach(section=>{
section.style.display="none";
});

document.getElementById(id).style.display="block";

}

function toggleMenu(){
    document.querySelector("header").classList.toggle("active");
}
