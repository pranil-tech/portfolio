function toggleSection(section) {
    const educationContainer = document.getElementById('education-container');
    const internshipContainer = document.getElementById('internship-container');

    educationContainer.style.display = section === 'education' ? 'flex' : 'none';
    internshipContainer.style.display = section === 'internship' ? 'flex' : 'none';
}
