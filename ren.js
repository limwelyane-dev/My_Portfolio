
function showSection(id){

let sections=document.querySelectorAll(".section");

sections.forEach(section=>{
section.style.display="none";
});

document.getElementById(id).style.display="block";

}

function toggleMenu(){
    const isMobile = window.innerWidth <= 900;

    document.querySelector("header").classList.toggle("active");

    if(isMobile){
        document.querySelector(".overlay").classList.toggle("active");
        document.querySelector("main").classList.toggle("blur");
    }
}
window.addEventListener("resize", () => {
    if(window.innerWidth > 900){
        document.querySelector("header").classList.remove("active");
        document.querySelector(".overlay").classList.remove("active");
        document.querySelector("main").classList.remove("blur");
    }
});
