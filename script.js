// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


// =========================
// Scroll Animation
// =========================

const cards = document.querySelectorAll(".skill-card, .project-card");

function reveal(){

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card=>{

        const top = card.getBoundingClientRect().top;

        if(top < trigger){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

cards.forEach(card=>{

    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";
    card.style.transition = "0.8s";

});

window.addEventListener("scroll", reveal);

reveal();


// =========================
// Navbar Shadow on Scroll
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow="0 4px 20px rgba(0,0,0,.15)";

    }

    else{

        header.style.boxShadow="none";

    }

});


// =========================
// Hero Button Animation
// =========================

const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter",()=>{

    btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

    btn.style.transform="scale(1)";

});