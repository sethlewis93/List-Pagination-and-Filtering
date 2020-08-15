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

// right now when the page loads all 54 students show up

// function to create pagination buttons
const appendPageLinks = (list) => {
  let pages = Math.ceil(list.length / pageItems); // # of pages needed for list
  let classDiv = document.querySelector(".page");
  let conDiv = document.createElement("div"); // created 'pagination' div
  conDiv.className = "pagination"; // assigned new div class name
  classDiv.appendChild(conDiv); // append new div to "page" div
  let ulElm = document.createElement("ul"); // created new ul element to be added to pagination div
  ulElm.className = "pagination"; 
  conDiv.appendChild(ulElm); // appended new ul to pagination div
  for (let i = 0; i < pages; i++) {
    // attempting to add li tag for every page link
    let liEls = document.createElement("li"); // created new li
    ulElm.appendChild(liEls); // appending new li to 'pagination' - the UL where pagination links need to be stored
    let a = document.createElement("a");
    a.href = "#";
    a.innerHTML = i + 1;
    liEls.appendChild(a);
    const firstAnchor = document.getElementsByTagName('a')[0];
    firstAnchor.className = "active"; 
  
    conDiv.addEventListener('click', (e) => {
      const findAnchors = document.querySelectorAll('a');
      showPage(studentList, i + 1);
      for (let j = 0; j < findAnchors.length; j++) {
        if (a.className == "active") {
          a.classList.remove('active');
        } else {
          e.target.classList.add('active');
        } 
      }
    });
  }  
};
appendPageLinks(studentList);