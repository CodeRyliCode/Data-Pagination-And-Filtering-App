/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = (page * 9);
   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if ([i] >= startIndex && [i] < endIndex) {
         let li = document.createElement('li');
         li.className = 'student-item cf';
         studentList.append(li);

         let studentlistDiv = document.createElement('div');
         studentlistDiv.className = 'student-details';
         li.append(studentlistDiv);

         let img = document.createElement('img');
         img.className = 'avatar';
         img.src = data[i].picture.medium;
         img.alt = 'Profile Picture';
         studentlistDiv.append(img);

         let h3 = document.createElement('h3');
         h3.innerHTML = data[i].name.first + ' ' + data[i].name.last;
         studentlistDiv.append(h3);

         let spanEmail = document.createElement('span');
         spanEmail.className = 'email';
         spanEmail.innerHTML = data[i].email;
         studentlistDiv.append(spanEmail);

         let joineddetailsDiv = document.createElement('div');
         joineddetailsDiv.className = 'joined-details';
         li.append(joineddetailsDiv);

         let spanDate = document.createElement('span');
         spanDate.className = 'date';
         spanDate.innerHTML = 'Joined' + ' ' + data[i].registered.date;
         joineddetailsDiv.append(spanDate);



      }
   }
}




/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

   let numberofPages = Math.ceil(list.length / 9);
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   for (let i = 1; i <= numberofPages; i++) {
      let li2 = document.createElement('li');
      linkList.append(li2);
   
      let pageButtons = document.createElement('button');
      pageButtons.type = 'button';
      pageButtons.innerHTML = [i];
      li2.append(pageButtons);
      let firstactiveButton = document.querySelector('button');
      firstactiveButton.className = 'active';
       
   }
   
   linkList.addEventListener('click', (e) => {
   
      if (e.target.tagName === "BUTTON") {
         let activeClass = document.querySelector(".active");
         activeClass.className = '';
         e.target.className = "active";
         showPage(list, e.target.textContent);
   
   }
   
   });
   
   }
   showPage(data, 1);
   addPagination(data);

   
// Call functions
