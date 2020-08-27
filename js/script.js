
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
  const classDiv = document.querySelector(".page");

  // Dynamically add new elements
  const createElement = (elementName, property, value) => {
  const element = document.createElement(elementName); 
  element[property] = value;
  return element;
}

  // Dynamically append new elements 
  const appendToDIV = (elementName, property, value) => {
    const element = createElement(elementName, property, value);
    classDiv.appendChild(element);
    return element;
  }
  const ul = appendToDIV('div', 'className', 'pagination')
    .appendChild(createElement('ul', 'className', 'pageLinks'));
  
  // Page links
  for (let i = 0; i < pages; i++) {
    const li = createElement('li', 'className', 'listItems');
    const a = createElement('a', 'className', '');
    ul.appendChild(li).appendChild(a); // is there a more efficient way?
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
      showPage(studentList, page); 
    });
  }
};
showPage(studentList, 1);
appendPageLinks(studentList);

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
button.addEventListener('click', (e) => { 
  e.preventDefault();
  let nameSearch = [];
  for (let i = 0; i < studentList.length; i++) {
    let studentName = studentList[i].querySelector('h3'); // returning h3 elements with name inside textContent 
    if (input.value.length !== 0) {
      let userSearch = input.value.toLowerCase(); // returns lower case string
      if (studentName.innerText.includes(userSearch)) { 
        // STUCK HERE
        nameSearch.push(studentList[i]);
        studentList[i].classList.add('match');
        // THIS RETURNS THE MATCHING NAME TO THE CONSOLE BUT I CAN'T DISPLAY IT ON PAGE
        console.log(nameSearch); 
      } else {
        studentList[i].style.display = 'none';   
      }
      // nameSearch log on line 97 gives me an array length of 1 yet code on line 102 below is NONETHELESS EXECUTING
      if (nameSearch.length === 0) {
        const ul = document.querySelector('.student-list');
        ul.innerText = 'No results found matching your search. Please try again.';
        } else {
        // This doesn't really do anything but the function should take in the list and return search results
        showPage(nameSearch, 1);
        // appendPageLinks(nameSearch);
      }
    } 
  }
});

/*input.addEventListener('keyup', () => nameSearch(input, studentList));

// Display pagination links based on search results
const matches = document.querySelectorAll('.match');

// Convert nodeList into Array: code retrieved from Stack Overflow query
const searchResults = Array.from(matches);

// showPage(searchResults, 1);
// appendPageLinks(searchResults);

if (searchResults.length === 0) {
  const ul = document.querySelector('.student-list');
  ul.innerHTML = 'No results found matching your search. Please try again.';
}
*/