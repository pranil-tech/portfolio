const educationContent = `
  <div class="education-item">
    <div>
      <h3>National Institute of Technology Srinagar</h3>
      <p>Degree: Bachelor of Technology (B.Tech)</p>
      <p>Major: Civil Engineering</p>
      <p>Year: 2019-2023</p>
    </div>
    <div>
      <h3>SG Ashramshala Jath</h3>
      <p>Higher Secondary School</p>
      <p>Year: 2019</p>
    </div>
    <div>
      <h3>Jawahar Navodaya Vidyalaya Solapur</h3>
      <p>Higher School</p>
      <p>Year: 2017</p>
    </div>
  </div>
`;

const internshipsContent = `
  <div class="intern-item">
    <div>
      <h2>1. Exposys Data Labs</h2>
      <h4>Web development Intern</h4>
      <p>
        <ul>Engineered and implemented a responsive website, employing advanced front-end technologies such as HTML5, CSS3, and JavaScript.</ul>
        <ul>Analyzed UI specifications from Figma to ensure pixel-perfect implementation and seamless integration of the website's visual elements.</ul>
      </p>
    </div>
    <div>
      <h2>2. Skybug technologies</h2>
      <h4>C++ Programming Intern</h4>
      <p>
        <ul>Worked with Skybug Technologies, focused on C++ Programming and Software Development. Executed tasks with precision, exceeding set benchmarks.</ul>
      </p>
    </div>
  </div>
`;

function showEducation() {
  const contentContainer = document.getElementById('content-container');
  contentContainer.innerHTML = educationContent;
}

function showInternships() {
  const contentContainer = document.getElementById('content-container');
  contentContainer.innerHTML = internshipsContent;
}
