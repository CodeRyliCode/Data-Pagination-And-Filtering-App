/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



const header = document.querySelector('header');
const h3 = document.createElement('h3'); 
h3.textContent = "No Results Found";
h3.className = "no-results";
h3.style.display = 'none';
header.insertAdjacentElement("afterend", h3);


function displayElement (list) {

   if(list.length === 0) {
      h3.style.display = '';

   } else {
      h3.style.display = 'none';
   }
}



/*
This function will be used to create
and append elements to the DOM so we can display a page of
9 students.*/

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = (page * 9);
   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   //   We are looping through the student data 
   for (let i = 0; i < list.length; i++) {

      /* using a conditional statement to create and
      append the elements needed to display the student information
      as we are looping through the student data */

      if ([i] >= startIndex && [i] < endIndex) {
         let li = document.createElement('li');

         /*Using "classList", you can add or remove a class without affecting any others the element 
         may have. But if you assign "className", it will wipe out any existing classes while adding 
         the new one (or if you assign an empty string it will wipe out all of them */
         
         li.classList.add('student-item', 'cf');
         studentList.append(li);

         let studentlistDiv = document.createElement('div');
         studentlistDiv.classList.add('student-details');
         li.append(studentlistDiv);

         let img = document.createElement('img');
         img.classList.add('avatar');
         img.src = list[i].picture.medium;
         img.alt = 'Profile Picture';
         studentlistDiv.append(img);

         let h3 = document.createElement('h3');
         h3.innerHTML = list[i].name.first + ' ' + list[i].name.last;
         studentlistDiv.append(h3);

         let spanEmail = document.createElement('span');
         spanEmail.classList.add('email');
         spanEmail.innerHTML = list[i].email;
         studentlistDiv.append(spanEmail);

         let joineddetailsDiv = document.createElement('div');
         joineddetailsDiv.classList.add('joined-details');
         li.append(joineddetailsDiv);

         let spanDate = document.createElement('span');
         spanDate.classList.add('date');
         spanDate.innerHTML = 'Joined' + ' ' + list[i].registered.date;
         joineddetailsDiv.append(spanDate);



      }
   }
}




/*
This function will dynamically create and append page buttons
with 9 students per page. We will be able to see the current page's
button that we click and see that it is active and highlighted
*/

function addPagination(list) {

   let numberofPages = Math.ceil(list.length / 9);
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   //looping through the pages
   for (let i = 1; i <= numberofPages; i++) {
      //creating and appending the pagination elements
      let li2 = document.createElement('li');
      linkList.append(li2);
   
      let pageButtons = document.createElement('button');
      pageButtons.type = 'button';
      pageButtons.innerHTML = [i];
      li2.append(pageButtons);

      //setting the first button as active 
      let firstactiveButton = document.querySelector('button');
      firstactiveButton.classList.add('active');
       
   }
   /* event listener that checks which button is clicked and adds
   the button class as active. */

   linkList.addEventListener('click', (e) => {
   
      if (e.target.tagName === "BUTTON") {
         let activeClass = document.querySelector('.active');
         activeClass.className = ('');
         e.target.classList.add('active');
         showPage(list, e.target.textContent);
   
   }
   
   });
   
   }
   // Calling the functions

   showPage(data, 1);
   addPagination(data);



   // creates search bar 
let label = document.createElement('label');
label.htmlFor = ('search');
label.classList.add('student-search');
header.append(label);

let span = document.createElement('span');
span.innerHTML = ('Search by name');
label.append(span);

let input = document.createElement('input');
input.id = ('search');
input.placeholder = ('Search by name...');
label.append(input);

let button = document.createElement('button');
button.type = ('button');
label.append(button);

let img = document.createElement('img');
img.src = ('img/icn-search.svg');
img.alt = ('Search icon');
button.append(img);




function searchFunction(searchInput, list) {

   let newStudentList = [];
   
   for(let i=0; i < list.length; i++) {
      let firstName = list[i].name.first.toLowerCase();
      let lastName = list[i].name.last.toLowerCase();
      console.log(firstName);
console.log(lastName);
      if(firstName.includes(searchInput.value.toLowerCase()) || lastName.includes(searchInput.value.toLowerCase()) ){
         newStudentList.push(list[i]);
      }       
   }

   displayElement(newStudentList);
   showPage(newStudentList, 1)
   addPagination(newStudentList);


   console.log(newStudentList);


console.log(displayElement(newStudentList));
console.log(showPage(newStudentList, 1))
console.log(addPagination(newStudentList));

}




search.addEventListener('keyup', () => {

   if(search.value.length != 0) {
         searchFunction(search, data);
      } else {
         showPage(data, 1)
         addPagination(data);
      }

 });



