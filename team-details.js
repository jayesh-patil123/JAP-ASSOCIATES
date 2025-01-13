// Function to show details in the team member modal with enhanced features
function showDetails(member) {
    const memberDetails = {
        ankush: `
            <h3>CA Ankush M. Patil</h3>
            <p>FCA, M. Com - A seasoned professional specializing in tax advisory, financial planning, and business consulting.</p>
            <a href="https://www.linkedin.com/in/ankushpatil" target="_blank">LinkedIn Profile</a>
            <a href="files/ankush-profile.pdf" download>Download Profile</a>
            <button onclick="bookAppointment('Ankush M. Patil')">Book Appointment</button>
        `,
        pratiksha: `
            <h3>CA Pratiksha P. Patni</h3>
            <p>FCA, B. Com - A skilled auditor and financial analyst with deep expertise in compliance and taxation.</p>
            <a href="https://www.linkedin.com/in/pratikshapatni" target="_blank">LinkedIn Profile</a>
            <a href="files/pratiksha-profile.pdf" download>Download Profile</a>
            <button onclick="bookAppointment('Pratiksha P. Patni')">Book Appointment</button>
        `,
        jugal: `
            <h3>CA Jugal P. Patil</h3>
            <p>ACA, B. Com - Expert in corporate finance, accounting, and taxation services.</p>
            <a href="https://www.linkedin.com/in/jugalpatil" target="_blank">LinkedIn Profile</a>
            <a href="files/jugal-profile.pdf" download>Download Profile</a>
            <button onclick="bookAppointment('Jugal P. Patil')">Book Appointment</button>
        `
    };

    const modal = document.getElementById("team-details-modal");
    const modalContent = document.getElementById("team-member-details");

    if (memberDetails[member]) {
        modalContent.innerHTML = memberDetails[member];
        modal.style.display = "flex";
        modal.setAttribute('aria-hidden', 'false');
        modal.classList.add('fade-in');
    } else {
        alert("Team member details not found.");
    }
}

// Close modal with animations and outside click support
function closeDetails() {
    const modal = document.getElementById("team-details-modal");
    modal.classList.remove('fade-in');
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal.style.display = "none";
        modal.setAttribute('aria-hidden', 'true');
        modal.classList.remove('fade-out');
    }, 300);
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modal = document.getElementById("team-details-modal");
    if (event.target === modal) {
        closeDetails();
    }
};

// Close modal using the 'Esc' key for better accessibility
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeDetails();
    }
});

// Simulated Appointment Booking Function
function bookAppointment(name) {
    alert(`Redirecting to the appointment booking page for ${name}`);
    window.location.href = "appointment.html";
}
