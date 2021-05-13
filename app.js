//Selectors

const autologInput = document.querySelector(".autolog-input")
const autologButton = document.querySelector(".autolog-button")
const autologList = document.querySelector(".autolog-list")

//Event Listeners
autologButton.addEventListener('click', autolog);

//Functions
function autolog(event) {
  event.preventDefault();
  //AutologDIV
  const autologDiv = document.createElement("div");
  autologDiv.classList.add("autolog")

  //Create list
  const newAutolog = document.createElement("li")
  newAutolog.innerText = 'hey';
  newAutolog.classList.add('autolog-item');
  autologDiv.appendChild(newAutolog)

  //Check Markbutton
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check-circle"></i>';
  completedButton.classList.add("complete-btn");
  autologDiv.appendChild(completedButton);

  //Check trashbutton
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-minus-circle"></i>';
  trashButton.classList.add("complete-btn");
  autologDiv.appendChild(trashButton);

  //Append to list
  autologList.appendChild(autologDiv);
};