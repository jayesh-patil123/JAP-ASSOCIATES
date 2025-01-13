// Back-to-Top Button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Accordion Functionality
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');
        const panel = accordion.nextElementSibling;
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
});

// Partner Profile Hover Effects
const partnerProfiles = document.querySelectorAll('.team-member');
partnerProfiles.forEach(profile => {
    profile.addEventListener('mouseenter', () => profile.style.transform = 'scale(1.05)');
    profile.addEventListener('mouseleave', () => profile.style.transform = 'scale(1)');
});

// Search Functionality
const searchBar = document.getElementById('search-bar');
const serviceBoxes = document.querySelectorAll('.service-box');
searchBar.addEventListener('input', () => {
    const searchText = searchBar.value.toLowerCase();
    serviceBoxes.forEach(box => {
        box.style.display = box.textContent.toLowerCase().includes(searchText) ? 'block' : 'none';
    });
});

// Service box functionality
document.querySelectorAll('.service-box').forEach(box => {
    box.addEventListener('click', () => {
        const serviceId = box.getAttribute('data-service-id');
        redirectToDetails(serviceId);
    });
});

function redirectToDetails(serviceId) {
    window.location.href = `service-details.html?service=${serviceId}`;
}
