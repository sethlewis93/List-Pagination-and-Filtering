
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

// search function
 
const nameSearch = (searchInput, names) => {
  for (let i = 0; i < names.length; i++) {
    names[i].classList.remove('match');
    console.log(names[i].textContent);
    // how do I target only the h3 textContent and not the other tags?
    if (searchInput.value == names[i].textContent.toLowerCase()) {
      // What's wrong with my conditional?
      names[i].classList.add('match');
      console.log(searchInput);
    } else {
      // This works
      names[i].style.display = "none"; 
    }
  }
}

// listeners on button and input
button.addEventListener('click', (e) => { 
  // If i want to use the 'enter' key - neither 'submit' or 'click' events log the console message 
  e.preventDefault();
  nameSearch(input, studentList);
  console.log('Submit button works');
});

input.addEventListener('keyup', () => nameSearch(input, studentList));