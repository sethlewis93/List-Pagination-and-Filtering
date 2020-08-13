// variable storing student LIST ITEM ELEMENTS from given HTML ??
const studentList = document.getElementsByClassName("student-item cf"); // querySelectorAll not working for some reason...
// variable storing number of items to show on page
const pageItems = 10;

// function to hide all students execept for 10
const showPage = (list, page) => {
  const startIndex = page * pageItems - pageItems;
  const endIndex = page * pageItems - 1;
  for (let i = 0; i < list.length; i++) {
    list[i].style.display = "none";
    if (i >= startIndex && i <= endIndex) {
      list[i].style.display = "list-item";
    }
  }
};

// function to create pagination buttons
const appendPageLinks = (list) => {
  let pages = Math.ceil(list.length / pageItems); // # of pages needed for list
  let classDiv = document.querySelector(".page");
  let conDiv = document.createElement("div"); // created 'pagination' div
  conDiv.className = "pagination"; // assigned new div class name
  classDiv.appendChild(conDiv); // append new div to "page" div
  let ulElm = document.createElement("ul"); // created new ul element to be added to pagination div
  ulElm.className = "test-ul"; // for test purposes only
  conDiv.appendChild(ulElm); // appended new ul to pagination div
  for (let i = 0; i < pages.length; i++) {
    // attempting to add li tag for every page link
    let getUl = document.getElementsByClassName("test-ul"); // selected new ul
    console.log(getUl);
    let liEls = document.createElement("li"); // created new li
    liEls.textContent = pages[i].value; // set text to index of the pages we'll need
    getUl.appendChild(liEls); // appending new li to 'test-ul' - the UL where pagination links need to be stored
  }
};
appendPageLinks(studentList);
