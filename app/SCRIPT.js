const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addTask() {
    if (inputbox.value === "") {
        alert("List is empty!");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "✖" ; // Unicode for multiplication sign
        li.appendChild(span); // Append the span to the li element

        listcontainer.appendChild(li); 
    }
    inputbox.value = ""; // Clear the input box after adding the task 
    savedata(); 

}

listcontainer.addEventListener("click", function(e) {
 if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle the checked class on click
        savedata(); 
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the li element when the span is clicked
        savedata();
    }
}, false); // Use event delegation to handle clicks on li and span elements

function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML); // Save the list to local storage
}
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data"); 
}
showTask(); 