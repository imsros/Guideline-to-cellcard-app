// JavaScript for smooth scrolling, homepage initialization, and menu highlight on scroll
document.addEventListener("DOMContentLoaded", () => {
  // Scroll to the "Home" section on page load
  document.querySelector("#home").scrollIntoView({ behavior: "smooth" });

  // Add event listeners to navigation links for smooth scrolling
  document.querySelectorAll(".header nav ul li a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior

      // Get the target section ID from the link's href
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Smoothly scroll to the target section
        targetSection.scrollIntoView({ behavior: "smooth" });

        // Set the clicked link as active
        document
          .querySelectorAll(".header nav ul li a")
          .forEach((navLink) => navLink.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });

  // Highlight the active menu link based on scroll position
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".header nav ul li a");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50; // Adjust offset for header height
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  });

  // Update the copyright year dynamically
  const currentYear = new Date().getFullYear();
  document.getElementById("mgsYear").textContent = currentYear + " ";
});
