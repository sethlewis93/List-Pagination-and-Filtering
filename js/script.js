// Store student list items
const studentList = document.querySelectorAll(".student-item");

// Maximum number of items per page
const pageItems = 10;

// Hide all students after 10
function showPage(list, page) {
  const startIndex = page * pageItems - pageItems;
  const endIndex = page * pageItems;
  for (let i = 0; i < list.length; i++) {
    list[i].style.display = "none";
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = "block";
    }
  }
};

// Create pagination buttons
function appendPageLinks(list) {
  // Set the pages needed
  const pages = Math.ceil(list.length / pageItems);

  // Create, append pagination elements
  const pageDiv = document.querySelector(".page");

  // Target pagination div (replaces div loaded on page with div of search results)
  const paginationDiv = document.querySelector(".pagination");
  if (paginationDiv) {
    paginationDiv.parentElement.removeChild(paginationDiv);
  }

  // Dynamically add new elements
  const createElement = (elementName, property, value) => {
    const element = document.createElement(elementName);
    element[property] = value;
    return element;
  };

  // Dynamically append new elements
  const appendToDIV = (elementName, property, value) => {
    const element = createElement(elementName, property, value);
    pageDiv.appendChild(element);
    return element;
  };
  const ul = appendToDIV("div", "className", "pagination").appendChild(
    createElement("ul", "className", "pageLinks")
  );

  // Page links
  for (let i = 0; i < pages; i++) {
    const li = createElement("li", "className", "listItems");
    const a = createElement("a", "className", "");
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

/***
  ////////////////////////////////////////////
  CODE TO OBTAIN "EXCEEDS EXPECTATIONS" GRADE
  ////////////////////////////////////////////
***/

// SEARCH CAPABILITY

const pageHeaderDiv = document.querySelector(".page-header");

// Functions to create and append new elements
const createElement = (elementName, property, value) => {
  const element = document.createElement(elementName);
  element[property] = value;
  return element;
};

const appendToDiv = (elementName, property, value) => {
  const element = createElement(elementName, property, value);
  pageHeaderDiv.appendChild(element);
  return element;
};

// Create search field, button & append to page
const searchDiv = appendToDiv("div", "className", "student-search").appendChild(
  createElement("input", "placeholder", "Search for students...")
);
searchDiv.type = "text";

const button = createElement("button", "textContent", "Search");
button.type = "button";
searchDiv.appendChild(button);

// Create and append invalid search message
const h2 = createElement(
  "h2",
  "textContent",
  "No results found matching your search. Please try again"
);
h2.style.display = "none";
pageHeaderDiv.appendChild(h2);

// Search filter function
function searchFeature() {
  // Array into which matching results will be stored
  let namesMatch = [];
  for (let i = 0; i < studentList.length; i++) {
    studentList[i].style.display = "none";
    let studentName = studentList[i].querySelector("h3");
    if (searchDiv.value.length !== 0) {
      let userSearch = searchDiv.value.toLowerCase();
      if (studentName.textContent.includes(userSearch)) {
        namesMatch.push(studentList[i]);
      }
    }
  }
  if (namesMatch.length === 0) {
    h2.style.display = "block";
    const previousH2 = document.getElementsByTagName("h2")[0];
    previousH2.style.display = "none";
  } else {
    h2.style.display = "none";
  }
  appendPageLinks(namesMatch);
  showPage(namesMatch, 1);
};

searchDiv.addEventListener("input", () => {
  searchFeature();
  if (searchDiv.value.length === 0 && h2.style.display == "block") {
    h2.style.display = "none";
    showPage(studentList, 1);
    appendPageLinks(studentList);
  }
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  searchFeature();
  if (searchDiv.value.length === 0 && h2.style.display == "block") {
    h2.style.display = "none";
    showPage(studentList, 1);
    appendPageLinks(studentList);
  }
});
