// ===============================
// 1. SMOOTH SCROLL (NAV LINKS)
// ===============================
document.addEventListener("DOMContentLoaded", function () {
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {

        const targetId = this.getAttribute('href');

        if (targetId && targetId.startsWith("#")) {
            e.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        }
    });
});


// ===============================
// 2. DARK MODE TOGGLE
// ===============================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeToggle.innerText = "Light Mode";
        } else {
            themeToggle.innerText = "Dark Mode";
        }
    });
}


// ===============================
// 3. PROJECT CARD HOVER EFFECT
// ===============================

document.querySelectorAll('.project').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.03)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});


// ===============================
// 4. SCROLL SPY (ACTIVE NAV LINK)
// ===============================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
});