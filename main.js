document.addEventListener("DOM Loaded",function(){
    document.getElementById("education-button").click();
});


function toggle(section) {
    var education = document.getElementById("education-container");
    var internship = document.getElementById("internship-container");

    var educationButton = document.getElementById("education-button");
    var internshipButton = document.getElementById("internship-button");

    if (section === 'education') {
        education.style.display = "flex";
        internship.style.display = "none";

        // Update button styling
        educationButton.classList.add("active");
        internshipButton.classList.remove("active");
    } else {
        education.style.display = "none";
        internship.style.display = "flex";

        // Update button styling
        educationButton.classList.remove("active");
        internshipButton.classList.add("active");
    }
}
