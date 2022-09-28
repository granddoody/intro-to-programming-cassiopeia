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


//message form 
const messageForm = document.querySelector('[name = "leave_message"]');
const submission = messageForm.addEventListener("submit", (event) =>
{
    const name = event.target.name.value; 
    const email = event.target.email.value;
    const message = event.target.message.value;

    event.preventDefault();

    console.log(name);
    console.log(email);
    console.log(message);
   
    
    
  
   const messageSection = document.getElementById("messages");
   const messageList = messageSection.querySelector("ul");
   


   const newMessage = document.createElement("li");
   newMessage.innerHTML = ` <a href= "mailto:${email}"> ${name} </a> <span class = "msg"> ${message}</span> ` ;

   let removeButton = document.createElement("button");
   removeButton.innerHTML = "Remove";
   removeButton.type = "button";

   const removal = removeButton.addEventListener("click", (event) =>{
       let entry = event.target.parentElement
        entry.remove();
    })

    newMessage.appendChild(removeButton);
    messageList.append(newMessage);
    messageForm.reset();
}
 );



