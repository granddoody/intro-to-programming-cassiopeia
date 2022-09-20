//copyright information 
const today = new Date (); 
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = (`Kenya Pascascio © ${thisYear} `);
footer.appendChild(copyright);

//skills section
const skills = ['HTML', 'JAVASCRIPT'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}