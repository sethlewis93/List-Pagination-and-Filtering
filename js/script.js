
// Store student list items
const studentList = document.querySelectorAll(".student-item"); 

// Max number of items per page
const pageItems = 10;

// Hide all students execept for up to 10
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


// Create pagination buttons
const appendPageLinks = (list) => {

  // Set the pages needed
  const pages = Math.ceil(list.length / pageItems);
  
  // Create, append pagnination elements 
  const pageDiv = document.querySelector('.page');

  // Target pagination div
  const paginationDiv = document.querySelector('.pagination')
  if (paginationDiv) {
    paginationDiv.parentElement.removeChild(paginationDiv);
  }

  // Dynamically add new elements
  const createElement = (elementName, property, value) => {
  const element = document.createElement(elementName); 
  element[property] = value;
  return element;
}

  // Dynamically append new elements 
  const appendToDIV = (elementName, property, value) => {
    const element = createElement(elementName, property, value);
    pageDiv.appendChild(element);
    return element;
  }
  const ul = appendToDIV('div', 'className', 'pagination')
    .appendChild(createElement('ul', 'className', 'pageLinks'));
  
  // Page links
  for (let i = 0; i < pages; i++) {
    const li = createElement('li', 'className', 'listItems');
    const a = createElement('a', 'className', '');
    ul.appendChild(li).appendChild(a);
    a.href = "#";
    a.innerHTML = i + 1; 
    const firstAnchor = document.getElementsByTagName("a")[0]; 
    firstAnchor.className = "active"; 
    li.addEventListener("click", (e) => {
      const getAnchors = document.querySelectorAll("a"); 
      for (let j = 0; j < getAnchors.length; j++) {
        getAnchors[j].classList.remove("active");
      }
      let page = e.target.innerHTML; 
      e.target.classList.add("active"); 
      showPage(list, page); 
    });
  }
};
showPage(studentList, 1);
appendPageLinks(studentList);

/*
  ////////////////////////////////////////////
  CODE TO OBTAIN "EXCEEDS EXPECTATIONS" GRADE
  ////////////////////////////////////////////
*/

// search button
const createElement = (elementName, property, value) => {
  const element = document.createElement(elementName); 
  element[property] = value;
  return element;
}
const pageHeaderDiv = document.querySelector(".page-header");
const searchDiv = createElement('div', 'className', 'student-search');
const input = createElement('input', 'placeholder', 'Search for students...');
input.type = 'text'; 
const button = createElement('button', 'textContent', 'Search');
button.type = 'button'; 
pageHeaderDiv.appendChild(searchDiv).appendChild(input);
searchDiv.appendChild(button);
 
// listeners on button and input
// search functionality
button.addEventListener('click', (e) => { // NEW BUG: 'click' seems to be the only one that works here
  e.preventDefault();
  let namesMatch = [];
  for (let i = 0; i < studentList.length; i++) {
    let studentName = studentList[i].querySelector('h3'); 
    if (input.value.length !== 0) {
      let userSearch = input.value.toLowerCase(); 
      if (studentName.textContent.includes(userSearch)) { 
        namesMatch.push(studentList[i]);
        console.log(namesMatch);
        studentList[i].classList.add('match');
      } else {
        studentList[i].style.display = 'none';   
      }
    } 
  }  
  if (namesMatch.length === 0) {
    const createElement = (elementName, property, value) => {
    const element = document.createElement(elementName); 
    element[property] = value;
    return element;
    }

    const h2 = createElement('h2', 'textContent', 'No results found matching your search. Please try again.');
    h2.id = 'no-results';
    const pageDiv = document.querySelector('.page');
    pageDiv.appendChild(h2);


    } else {
      if (namesMatch.length > pageItems) {
        // if matching names array is longer than 10, remove original pagination links, call appendPageLinks function
        const pages = Math.ceil(namesMatch.length / pageItems);
        const pageDiv = document.querySelector('.page');
        const paginationDiv = document.querySelector('.pagination');
        pageDiv.removeChild(paginationDiv)
        appendPageLinks(namesMatch)
        showPage(namesMatch, pages);
        if (h2) {
          h2.parentElement.removeChild(h2);
        } else  {
          // otherwise, show only one page
          showPage(namesMatch, 1);
        } 
      } 
  }
});

// NEW BUG: Can't enter more searches once the 'no results' string displays
// input.addEventListener('input', () => {
//   let namesMatch = [];
//   for (let i = 0; i < studentList.length; i++) {
//     let studentName = studentList[i].querySelector('h3'); 
//     if (input.value.length !== 0) {
//       let userSearch = input.value.toLowerCase(); 
//       if (studentName.textContent.includes(userSearch)) { 
//         namesMatch.push(studentList[i]);
//         studentList[i].classList.add('match'); // is this line even necessary?
//       } else {
//         studentList[i].style.display = 'none';   
//       }  
//     } 
//   }  
//   if (namesMatch.length === 0) {
//     const ul = document.querySelector('.student-list');
//     ul.innerText = 'No results found matching your search. Please try again.';
//     } else {
//       if (namesMatch.length > pageItems) {
//         // if matching names array is longer than 10, remove original pagination links, call appendPageLinks function
//         const pages = Math.ceil(namesMatch.length / pageItems);
//         const pageDiv = document.querySelector('.page');
//         const paginationDiv = document.querySelector('.pagination');
//         pageDiv.removeChild(paginationDiv)
//         appendPageLinks(namesMatch)
//         showPage(namesMatch, pages);
//         } else  {
//           // otherwise, show only one page
//           showPage(namesMatch, 1);
//        } 
//     }
// });


/*input.addEventListener('keyup', () => namesMatch(input, studentList));

// Display pagination links based on search results
const matches = document.querySelectorAll('.match');
console.log(matches);

// Convert nodeList into Array: code retrieved from Stack Overflow query
const searchResults = Array.from(matches);

// showPage(searchResults, 1);
// appendPageLinks(searchResults);

if (searchResults.length === 0) {
  const ul = document.querySelector('.student-list');
  ul.innerHTML = 'No results found matching your search. Please try again.';
}
*/