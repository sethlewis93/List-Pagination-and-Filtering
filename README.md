# List-Pagination-and-Filtering(ii)

## About

This is my Team Treehouse Techdegree Project #2. Writing in JavaScript the project to displays 10 names at a time using a navigation system (a series of links at the bottom of the page) allowing users to click through the other student entries, 10 at a time. The JS works with a list of students of any number.

## Techniques & Skills

The bulk of the skills needed to complete this project are related to DOM Manipulation. Being able to access the DOM elements, manipulate them, and respond to user actions on the DOM was crucial to building the appendPageLinks function which accesses and appends page links to the bottom of the page based on the list of students and then responds to user clicks in order to navigate the index of students.

## Extra Credit Features

For extra credit, I added the following features dynamically using JS:
1.) Search bar (input) and button
2.) Functionality to the search: When the "Search" button is clicked, the list is filtered by student name for those that include the search value.
3.) Based on search results, the number of pages available to the user changes. For example, an original page may have X number of links at the bottom of the page when no filter is applied to the names. Once a user searches for a name, the pagination links dynamically change according to the number of students who's names are applicable in the search.
4.) If no matches are found by the search, a message in the HTML notifies the user that there are no matches.
