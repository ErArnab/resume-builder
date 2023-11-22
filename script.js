// script.js

document.getElementById('generate-cv').addEventListener('click', function() {
    // Retrieve and organize user input
    var personalInfo = document.getElementById('personal-info').querySelectorAll('input');
    var education = document.getElementById('education').querySelectorAll('input');
    var experience = document.getElementById('experience').querySelectorAll('input');
    var skills = document.getElementById('skills').querySelectorAll('input');

    // Create a CV object
    var cv = {
        personalInfo: getInputValues(personalInfo),
        education: getInputValues(education),
        experience: getInputValues(experience),
        skills: getInputValues(skills)
    };

    // Display the CV (you can replace this with saving to a database or other functionality)
    console.log(cv);
});

function getInputValues(inputs) {
    var values = {};
    inputs.forEach(function(input) {
        values[input.name] = input.value;
    });
    return values;
}
