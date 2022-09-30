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

 //hide messages section until a submission happens 
 document.getElementById("messages").style.visibility = "hidden";

//message form 
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
    messageSection.style.visibility = "visible";


   //create unordered message list
    const messageList = messageSection.querySelector("ul");

   // create list elements to store messages
   const newMessage = document.createElement("li");

   // each list item  is a message specifying user name and email 
   newMessage.innerHTML = ` <a href= "mailto:${email}"> ${name}  </a> <span class = "msg"> wrote: ${message}</span> ` ;


   //create edit button 
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.type = "button";

    editButton.addEventListener("click", (event) => {
        // redefines the innerHTML of newMessage if edit button is clicked which allows user to type new message
        var updatedMessage = window.prompt("Edit Your Message!"); 
        newMessage.innerHTML = ` <a href= "mailto:${email}"> ${name} </a> <span class = "msg">   wrote: ${updatedMessage}</span> ` ;
        
        //gives you the edit/remove option everytime message is updated
        newMessage.appendChild(editButton);
        newMessage.appendChild(removeButton);
        messageList.append(newMessage);
    });

   //create remove button
   let removeButton = document.createElement("button");
   removeButton.innerText = "Remove";
   removeButton.type = "button";

    //tells button to remove parent of button when clicked 
    removeButton.addEventListener("click", (event) =>{
       let entry = event.target.parentElement
        entry.remove();
    });

    // add to DOM
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.append(newMessage);
  
    //reset form after user data has been "stored"
    messageForm.reset();
});
