const form = document.getElementById('resume-form');
const resumePreview = document.getElementById('resume-preview');
const resumeTemplate = document.getElementById('resume-template');
const downloadButton = document.getElementById('download-button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const education = document.getElementById('education').value;
  const experience = document.getElementById('experience').value;
  
  // Generate the resume HTML based on the user's input
  const resumeHTML = `
    <div>
      <h3>${name}</h3>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      
      <h4>Education</h4>
      <p>${education}</p>
      
      <h4>Work Experience</h4>
      <p>${experience}</p>
    </div>
  `;
  
  // Insert the generated HTML into the resume template
  resumeTemplate.innerHTML = resumeHTML;
  
  // Show the resume preview
  resumePreview.style.display = 'block';
});

downloadButton.addEventListener('click', () => {
  // Convert the resume preview to a PDF and download it
  // You will need to use a third-party library to do this, such as jsPDF or html2pdf
});
