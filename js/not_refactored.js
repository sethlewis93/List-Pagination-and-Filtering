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

// Function to create pagination buttons
const appendPageLinks = (list) => {

  // Page link variables
  let pages = Math.ceil(list.length / pageItems); 
  let classDiv = document.querySelector(".page");
  let conDiv = document.createElement("div"); 
  conDiv.className = "pagination";
  classDiv.appendChild(conDiv); 
  let ulElm = document.createElement("ul"); 
  ulElm.className = "pagination";
  conDiv.appendChild(ulElm); 

// Page links
  for (let i = 0; i < pages; i++) {
    let liEls = document.createElement("li"); 
    ulElm.appendChild(liEls); 
    let a = document.createElement("a"); 
    a.href = "#";
    a.innerHTML = i + 1; 
    liEls.appendChild(a);
    const firstAnchor = document.getElementsByTagName("a")[0]; 
    firstAnchor.className = "active"; 
    liEls.addEventListener("click", (e) => {
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

// add search button
const pageHeaderDiv = document.querySelector(".page-header");
const searchDiv = document.createElement("div");
searchDiv.className = "student-search";
pageHeaderDiv.appendChild(searchDiv);
const input = document.createElement('input'); 
input.placeholder = 'Search for students...';
searchDiv.appendChild(input);
const button = document.createElement('button');
button.textContent = 'Search';
searchDiv.appendChild(button);

pageHeaderDiv.addEventListener("submit", (e) => {
  e.preventDefault();
  
});