document.addEventListener('DOMContentLoaded', function () {
    const educationGrid = document.querySelector('.education-grid');
    const skillsGrid = document.querySelector('.skills-grid');

    // Function to show the education grid
    function showEducationGrid() {
        educationGrid.style.display = 'grid';
        skillsGrid.style.display = 'none';
    }

    // Function to show the skills grid
    function showSkillsGrid() {
        educationGrid.style.display = 'none';
        skillsGrid.style.display = 'grid';
    }

    // Attach click event listeners to your education and skills triggers
    const educationTrigger = document.querySelector('#education-trigger');
    const skillsTrigger = document.querySelector('#skills-trigger');

    educationTrigger.addEventListener('click', showEducationGrid);
    skillsTrigger.addEventListener('click', showSkillsGrid);
});