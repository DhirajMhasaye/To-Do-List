const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to Add task in the list
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    
    //saveData function will store the data every time 
    // we update the value
    saveData();
}

// Javascript for the click function
// When clicked on the task, the line through should appear

listContainer.addEventListener('click', function(e){
    //When we clicked on the li element (task that we have created),
    //it will toggle the li to .checked class
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        // listContainer.removeAttribute("class","checked");

        
        //saveData function will store the data every time 
        // we update the value
        saveData();
    }

    //When we clicked on the span element (cross icon),
    //it will remove the parent element li from the list.
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

        //saveData function will store the data every time 
        // we update the value
        saveData();
    }
}, false);

//Function to store the list in the local browser storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//Function to dispay data whenever we open the browser
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
//Call the function every time so the stored data will be shown 
// every time we open the browser
showTask();