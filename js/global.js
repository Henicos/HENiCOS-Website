


// Script pour le menu de navigation

window.addEventListener("scroll", function () {
    let nav = document.querySelector(".bloc-nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled"); // Ajoute le fond opaque quand on scrolle
    } else {
        nav.classList.remove("scrolled"); // Retire le fond si on remonte
    }
});

// Script pour le menu burger

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

const nav = document.querySelector('.bloc-nav');

hamMenu.addEventListener('click', () =>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');

    nav.classList.toggle('hidden');

})


// Script pour le décalage des liens internes (profil et capacité)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault(); // Empêche le saut instantané par défaut
        let target = document.querySelector(this.getAttribute("href"));
        if (target) {
            let offset = 200; // Décalage en pixels vers le bas
            let targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
    });
});