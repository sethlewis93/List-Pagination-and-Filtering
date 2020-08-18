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
  const pages = Math.ceil(list.length / pageItems); // # of pages needed for list
  for (let i = 0; i < pages; i++) { // for every page needed based on list size...
    let createList = `
      <div class="newDiv">
        <ul class="newUl">
            <li>
              <a href="#">${[i]}</a>
            </li> 
        </ul>
      </div>
    `;
    document.querySelector('.page').innerHTML = createList;
    const pageDiv = document.querySelector('.newDiv');
    const firstAnchor = document.getElementsByTagName('a')[0]; // retrieve first anchor
    firstAnchor.className = "active"; // set first anchor (link to the page 1) to active
    const getAnchors = document.querySelectorAll('a'); // grab all anchor tags
    for (let j = 0; j < getAnchors.length; j++) { // for every anchor...
      pageDiv.addEventListener('click', (e) => { 
        let page = e.target.innerHTML; // target and store the text of the element clicked
        getAnchors[j].classList.remove('active'); // remove active class name to all links...
        e.target.classList.add('active'); // ...add active class name to link clicked
        showPage(studentList, page); // page parameter corresponds to text of element clicked
      });
    };
  }  
};
showPage(studentList, 1);
appendPageLinks(studentList);
// add search button