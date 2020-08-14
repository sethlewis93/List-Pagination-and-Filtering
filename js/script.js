// variable storing student LIST ITEM ELEMENTS from given HTML ??
const studentList = document.getElementsByClassName("student-item cf"); // querySelectorAll not working for some reason...
// variable storing number of items to show on page
const pageItems = 10;

// function to hide all students execept for 10
const showPage = (list, page) => {
  const startIndex = page * pageItems - pageItems;
  const endIndex = page * pageItems;
  for (let i = 0; i < list.length; i++) {
    list[i].style.display = "none";
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = "list-item";
    }
  }
};

showPage(studentList, 2);

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
  for (let i = 0; i < pages; i++) {
    // attempting to add li tag for every page link
    let liEls = document.createElement("li"); // created new li
    ulElm.appendChild(liEls); // appending new li to 'test-ul' - the UL where pagination links need to be stored
    let a = document.createElement("a");
    a.href = "#";
    a.innerHTML = i + 1;
    a.className = "active";
    liEls.appendChild(a);
    a.addEventListener("click", (e) => {
      showPage(studentList, i + 1);
      for (let j = 0; j < pages; j++) {
        a.classList.remove("active");
        let tar = e.target; // I still don't quite get 'e' and 'event.target'...
        tar.classList.add("active");
      }
    });
  }
};
appendPageLinks(studentList);
