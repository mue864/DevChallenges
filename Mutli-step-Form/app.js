const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const userName = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const pageNumber = document.getElementById("pageNumber");

const activate = document.querySelector(".active");

const allDots = document.querySelectorAll(".dots");
const changeFirstDot = allDots[0];
const changeSecondDot = allDots[1];


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
}

function togglePage3() {

}

function changeDotColor(dotPosition) {
    allDots[dotPosition].style.background = "#845EEE";
}



