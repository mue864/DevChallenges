const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

let emailInput;
let userName;

const pageNumber = document.getElementById("pageNumber");

const activate = document.querySelector(".active");
const ulElement = document.getElementById("listItems");
const allDots = document.querySelectorAll(".dots");
const changeFirstDot = allDots[0];
const changeSecondDot = allDots[1];

// array to store the list of selected topics
let selectedTopics = [];

function togglePage1() {

    const pageVisited = document.querySelector(".visited");
    page1.style.display = "none";
    page2.style.display = "flex";

    // change the page number
    pageNumber.innerText = "2";

    // remove the current active dot
    pageVisited.classList.remove('active');

    // add another purple dot
    changeFirstDot.classList.add('visited');
    changeFirstDot.classList.add('active');
//  remove the dots class to avoid color conflicts
    changeFirstDot.classList.remove('dots');

    extractInfo();

}

function extractInfo() {
    const name = userName.value;
    const email = emailInput.value;

    console.log("Name: "  + name);
    console.log("Email" +  email);
}

function togglePage2() {
    const pageVisited = document.querySelector(".pg1");
    page2.style.display  = "none";
    page3.style.display = "flex";

        // change the page number
        pageNumber.innerText = "3";

    // remove the current active dot
    pageVisited.classList.remove('active');

    changeSecondDot.classList.add('visited');
    changeSecondDot.classList.add("active");

    changeSecondDot.classList.remove('dots');

    toggleResults();
}

function togglePage3() {

}


function activateBtn(id) {
    
    const test = document.getElementById(id); 
    test.classList.toggle('highlight');
}

function changeDotColor(dotPosition) {
    allDots[dotPosition].style.background = "#845EEE";
}

function validateAndProceed() {
    // Get the input fields, not their values
    userName = document.getElementById("nameInput");
    emailInput = document.getElementById("emailInput");

    if (userName.value === "" || emailInput.value === "") {
        alert("Fill in the blanks");
    } else if (!validateEmail(emailInput.value)) {
        alert("Enter a valid email.");
    } else {
        togglePage1();
    }
}

function validateEmail(email) {
   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return re.test(email);
}

function toggleSelection(topic, element) {

    const index = selectedTopics.indexOf(topic);

    // if there is no such element
    if (index === -1) {
        // if the topic is not already added, add it
        selectedTopics.push(topic);

        // activate the highlight class
        element.classList.add('highlight');
    } else {
        // If the topic is already selected, remove it
        selectedTopics.splice(index, 1);
        element.classList.remove('highlight');  // Visually unmark as selected
    }
}

function toggleResults() {
    // Get the elements where you want to display the name and email
    const printName = document.getElementById('user');
    const printEmail = document.getElementById('userEmail');

    // Set the text content of these elements to the values of the inputs
    printName.textContent = userName.value;
    printEmail.textContent = emailInput.value;

    // Clear the list first to avoid duplicates
    ulElement.innerHTML = "";

    // Loop through selected topics and append each as an li element
    selectedTopics.forEach(topicId => {
        const topicElement = document.getElementById(topicId);  // Get the div element by ID
        const topicText = topicElement.textContent.trim();  // Get the inner text of the div

        // Create a new list item and set its text content
        const listItem = document.createElement("li");
        listItem.textContent = topicText;

        // Append the list item to the ul
        ulElement.appendChild(listItem);
    });
}




