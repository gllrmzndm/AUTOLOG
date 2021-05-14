//Selectors

const autologInput = document.querySelector(".autolog-input")
const autologButton = document.querySelector(".autolog-button")
const autologList = document.querySelector(".autolog-list")

//Event Listeners this listen to an event like click and fires the function autlog event.
autologButton.addEventListener('click', autolog);
autologButton.addEventListener('enter', autolog);


//Function autolog
function autolog(event) {
  event.preventDefault();
  //AutologDIV
  const autologDiv = document.createElement("div");
  autologDiv.classList.add("autolog")

  //Create list
  const newAutolog = document.createElement("ul")
  newAutolog.innerText = autologInput.value;
  newAutolog.classList.add('autolog-item');
  autologDiv.appendChild(newAutolog)

  //Check Markbutton
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  autologDiv.appendChild(completedButton);

  //Check trashbutton
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-minus"></i>';
  trashButton.classList.add("trash-btn");
  autologDiv.appendChild(trashButton);

  //Append to list
  autologList.appendChild(autologDiv);

  //Reset autolog inputfield
  resetAutologInput();

  function resetAutologInput() {
  document.getElementById("autolog-input").value = ("");
  };
}

autologList.addEventListener('click', deleteCheck);

function deleteCheck(e){
  e.preventDefault();
  console.log(e.target + "eerste log");
  const autologItem = e.target;
  console.log(autologItem);
  if(autologItem.classList[0] === "trash-btn") {
  console.log('what');
  const delAutlogitem = autologItem.parentElement;
  delAutlogitem.remove();
  }
}