// JavaScript for interactivity

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight navigation links on scroll
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY + 60; // Adjust for header height

        sections.forEach(section => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    });
});
