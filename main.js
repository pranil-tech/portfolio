function toggleSection(section) {
    const educationContainer = document.getElementById('education-container');
    const internshipContainer = document.getElementById('internship-container');

    if (section === 'education') {
        educationContainer.style.display = 'flex';
        internshipContainer.style.display = 'none';
    } else if (section === 'internship') {
        educationContainer.style.display = 'none';
        internshipContainer.style.display = 'flex';
    }
}
