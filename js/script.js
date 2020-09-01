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
  const pageDiv = document.querySelector(".page");

  // Target pagination div
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
};
const pageHeaderDiv = document.querySelector(".page-header");
const searchDiv = createElement("div", "className", "student-search");
const input = createElement("input", "placeholder", "Search for students...");
input.type = "text";
const button = createElement("button", "textContent", "Search");
button.type = "button";
pageHeaderDiv.appendChild(searchDiv).appendChild(input);
searchDiv.appendChild(button);

// Invalid search message
const h2 = createElement(
  "h2",
  "textContent",
  "No results found matching your search. Please try again."
);
const pageHeader = document.querySelector(".page-header");
pageHeader.appendChild(h2);
h2.style.display = "none";

// Search filter function
function searchFeature() {
  let namesMatch = [];
  for (let i = 0; i < studentList.length; i++) {
    studentList[i].style.display = "none";
    let studentName = studentList[i].querySelector("h3");
    if (input.value.length !== 0) {
      let userSearch = input.value.toLowerCase();
      if (studentName.textContent.includes(userSearch)) {
        namesMatch.push(studentList[i]);
      }
    }
  }
  if (namesMatch.length === 0) {
    h2.style.display = "block";
  } else {
    h2.style.display = "none";
    appendPageLinks(namesMatch);
    showPage(namesMatch, 1);
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  searchFeature();
});

input.addEventListener("input", () => {
  searchFeature();
});
