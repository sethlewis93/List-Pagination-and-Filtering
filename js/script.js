// variable storing student LIST ITEM ELEMENTS 
const studentList = document.getElementsByClassName("student-item cf"); // querySelectorAll NOT WORKING FOR SOME REASON...
// variable storing number of items to show on page
const pageItems = 10;

// function to hide all students execept for 10
const showPage = (list, page) => {
  const startIndex = page * pageItems - pageItems;
  const endIndex = page * pageItems;
  for (let i = 0; i < list.length; i++) {
    list[i].style.display = "none"; // hiding list items by default
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = "list-item"; 
    }
  }
};

// function to create pagination buttons
// RESEARCH: USING LITERALS HERE 
const appendPageLinks = (list) => {
  let pages = Math.ceil(list.length / pageItems); // # of pages needed for list
  let classDiv = document.querySelector(".page");
  let conDiv = document.createElement("div"); // created 'pagination' div
  conDiv.className = "pagination"; 
  classDiv.appendChild(conDiv); // append new div to "page" div
  let ulElm = document.createElement("ul"); // created new ul element 
  ulElm.className = "pagination"; 
  conDiv.appendChild(ulElm); // appended new ul to pagination div

  for (let i = 0; i < pages; i++) { // for every page needed based on list size...
    let liEls = document.createElement("li"); // ...create new li...
    ulElm.appendChild(liEls); // ...append new li to new ul...
    let a = document.createElement("a"); // ...create anchor tag
    a.href = "#";
    a.innerHTML = i + 1; // text corresponds to # of pages needed for list
    liEls.appendChild(a);
    const firstAnchor = document.getElementsByTagName('a')[0]; // retrieve first anchor
    firstAnchor.className = "active"; // set first anchor (link to the page 1) to active
    const getAnchors = document.querySelectorAll('a'); // grab all new anchor tags
    for (let j = 0; j < getAnchors.length; j++) { // for every anchor...
      liEls.addEventListener('click', (e) => { // listener works BUT IF YOU CLICK AWAY FROM LIST, BUG OCCURS!
        let page = e.target.innerHTML; // target and store the text of the element clicked
          getAnchors[j].classList.remove('active');
          e.target.classList.add('active'); // ...add active class name to link clicked
        showPage(studentList, page); // page parameter corresponds to text of element clicked
      });
    };
  }  
};
showPage(studentList, 1);
appendPageLinks(studentList);
// add search button