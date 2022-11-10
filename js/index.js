/* -------------------------------- copyright section -----------------------------------*/
const today = new Date (); 
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const copyrightContainer = document.createElement("div")
copyright.innerHTML = (`Kenya Pascascio © ${thisYear} `);
copyrightContainer.appendChild(copyright);
footer.appendChild(copyrightContainer);
/* ---------------------------------------------------------------------------------------*/



/* -------------------------------- skills section ---------------------------------------*/
const skills = ['HTML', 'JAVASCRIPT', 'CSS', 'MATLAB'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.classList.add('skill')
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
/* -----------------------------------------------------------------------------------------*/



/* ----------------------------------- leave a message form ----------------------------------*/

//hide messages section until a submission happens 
document.getElementById("messages").style.display = "none";

 //hide messages section until a submission happens 
 document.getElementById("messages").style.visibility = "hidden";


const messageForm = document.querySelector('[name = "leave_message"]');
messageForm.addEventListener("submit", (event) =>
{
    // store data from the form 
    const name = event.target.name.value; 
    const email = event.target.email.value;
    const message = event.target.message.value;

    console.log(event);
    //prevent page from automatic refresh when there is submission
    event.preventDefault();

    //print name, email, message to console 
    console.log(name);
    console.log(email);
    console.log(message);
   
    //create section for messages
    const messageSection = document.getElementById("messages");
    messageSection.style.display = "block";

   //create unordered message list
    const messageList = messageSection.querySelector("ul");

   // create list elements to store messages
   const newMessage = document.createElement("li");
   newMessage.classList.add ("message");

   // each list item  is a message specifying user name and email 
   newMessage.innerHTML = `<div> <a href= "mailto:${email}"> ${name}  </a> <span class = "msg"> wrote: ${message}</span> </div>` ;
    
   //create edit button 
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.type = "button";
    
   

    editButton.addEventListener("click", (event) => {
        // redefines the innerHTML of newMessage if edit button is clicked which allows user to type new message
        var updatedMessage = window.prompt("Edit Your Message!"); 
        newMessage.innerHTML = `<div><a href= "mailto:${email}"> ${name} </a> <span class = "msg"> wrote: ${updatedMessage}</span></div> ` ;
        
        //gives you the edit/remove option everytime message is updated
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(removeButton);
        newMessage.appendChild(buttonContainer);
        messageList.appendChild(newMessage);
    });

   //create remove button
   let removeButton = document.createElement("button");
   removeButton.innerText = "Remove";
   removeButton.type = "button";
   
  


    //tells button to remove parent of button (which is the message) when clicked 
    removeButton.addEventListener("click", (event) =>{
       newMessage.remove();

       if(messageList.childNodes.length <= 0) {
        messageSection.style.display = "none";
       }
    });


   //create div to store buttons together
    var buttonContainer = document.createElement("div");
    buttonContainer.classList.add("message-buttons");

    // add to DOM
    
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(removeButton);
  newMessage.appendChild(buttonContainer);
 messageList.appendChild(newMessage);
  
    //reset form after user data has been "stored"
    messageForm.reset();
});
/*---------------------------------------------------------------------------------------*/

/*API FETCH LESSON 6-2*/
fetch('https://api.github.com/users/granddoody/repos')
    .then(response => response.json())
    .then( repositories => {
        var projectSection = document.getElementById("projects");
        var projectList = projectSection.querySelector("ul");
        
    for ( i = 0; i < repositories.length; i++){
        var project = document.createElement('li');
        if (repositories[i].name.includes('intro')){
        project.innerHTML = `<a class = "project-links" href = "${repositories[i].html_url}"> ${repositories[i].name}</a>`;
        projectList.appendChild(project);
        }
    }
})


/**/




