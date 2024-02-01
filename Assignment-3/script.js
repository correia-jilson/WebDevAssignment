//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");


let tableLength;
// to edit and delete the columns
const delete_col = document.getElementsByClassName("delete_col"); 
const edit_col = document.getElementsByClassName("edit_col"); 
// get the elements from TH
var count_checkbox = 0;

//to add new student on clicking Add New Student
function new_element() {
  var table = document.querySelectorAll('tbody > tr');
  var tablen = table.length;
  var col = document.getElementById("myTable").rows[0].cells.length;
  const max = 99999;
  const min = 10000;
  var row_count = 0;
  for( i = 1 ; i <= table.length ; i++ ){
    if( i % 2 != 0 ) {
      row_count++;
    }
  }
  var table_1 = document.getElementById("myTable");

  var row_1 = table_1.insertRow();
  const td = [];
  for ( i = 0 ; i < 10 ; i++ ){
   td[i] = row_1.insertCell(i);
  }

  td[0].innerHTML = `<td><input type="checkbox" onclick="checkboxChange()" /><br /><br /><img onclick="imageAction(this)" src="down.png" width="25px" /></td>`; 
  td[1].innerHTML = "Student "+ row_count;
  td[2].innerHTML = "Teacher "+ row_count;
  td[3].innerHTML = "Approved";
  td[4].innerHTML = "Fall"
  td[5].innerHTML = "TA"
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  td[6].innerHTML = num;
  td[7].innerHTML = "100%"
  td[8].innerHTML = `<td><button onclick = "delete_row(this)">Delete</button></td>`;
  td[9].innerHTML = `<td><button onclick = "edit_row(this)">Edit</button></td>`;
  alert("Student "+row_count+ " inserted");

  var row_2 = table_1.insertRow();
  var td_0 = row_2.insertCell(0);
  var td_1 = row_2.insertCell(1);

  td_0.innerHTML = '';
  td_1.innerHTML = `<td colspan="8">
  Advisor:<br /><br />
  Award Details<br />
  Summer 1-2014(TA)<br />
  Budget Number: <br />
  Tuition Number: <br />
  Comments:<br /><br /><br />
  Award Status:<br /><br /><br />
  </td>`;
  td_1.parentNode.hidden = true;
  checkboxChange(Math.floor(tablen/2));
}

// function for onload
window.onload = function() {
  const col = [];
  const checkbox = document.querySelectorAll('input[type = checkbox]');
  for(i=0; i<checkbox.length; i++) {
    checkboxChange(i);
  }
}

//checkbox change function for the buttons rows
function checkboxChange(value) {
  const checkbox = document.querySelectorAll('input[type = checkbox]');
    checkbox[value].addEventListener("change", function() {

      var submit_button = document.getElementById('button');
      var parent_element = this.parentElement.parentElement.lastElementChild; 
      // edit column button
      var del_btn = parent_element.previousElementSibling.style.display;
      // delete column button
      var edit_btn = parent_element.style.display;
      
      checkbox[value].checked ? count_checkbox++ : count_checkbox--;
      if(count_checkbox > 0)
      {
        // make SubmitSelectButton orange when any box checked
        document.getElementById("button").style.backgroundColor = "orange";
        document.getElementById("button").style.borderColor = "orange";

        delete_col[0].style.display = "table-cell";
        parent_element.previousElementSibling.style.display = del_btn === '' ? 'table-cell' : '';
        parent_element.previousElementSibling.innerHTML = `<td style="display: table-cell"><button onclick = "delete_row(this)">Delete</button></td>`;
        edit_col[0].style.display = "table-cell";
        parent_element.style.display = edit_btn ==='' ? 'table-cell' : '';
        parent_element.innerHTML = `<td style="display: table-cell"><button onclick = "edit_row(this)">Edit</button></td>`;
      }
      else if(count_checkbox == 0)
      {
        // make SubmitSelectButton gray when any box not checked
        document.getElementById("button").style.backgroundColor = "gray";
        document.getElementById("button").style.borderColor = "gray"; 
        delete_col[0].style.display = "none";
        parent_element.previousElementSibling.style.display = del_btn === '' ? 'table-cell' : '';
        edit_col[0].style.display = "none";
        parent_element.style.display = edit_btn ==='' ? 'table-cell' : '';
      }
      if(this.checked) {
        var row = this.parentNode.parentNode.rowIndex;
        var checked_row = document.getElementsByTagName('tr')[row];
        // changing row bg when checked
        checked_row.style.backgroundColor = "yellow";
        
      } 
      else {
      var row = this.parentNode.parentNode.rowIndex;
      var unchecked_row = document.getElementsByTagName('tr')[row];
      unchecked_row.style.backgroundColor = "white";
      }
    })
  } 



//function to delete the rows using delte button

function delete_row(row) {
  var prime = row.parentNode; 
  var dropDown = row.parentNode.parentNode.nextElementSibling;
  // drop down txt delete
  prime.parentNode.nextElementSibling.remove(dropDown);
  // row delete
  prime.parentNode.remove(prime);
  // decrease the count of checkbox
  count_checkbox--;
  var tableLength = document.querySelectorAll('tbody > tr').length;
  if(count_checkbox == 0)
  {
    document.getElementById("button").style.backgroundColor = "gray";
    document.getElementById("button").style.borderColor = "gray";
    // submit gray 
    delete_col[0].style.display = "none";
    edit_col[0].style.display = "none";
  }
}

//Function to edit the row contents

function edit_row(row) {
  prompt("Editing row contents");
}

//drop dpwn button \/ click action 
function imageAction() {
var img_tag = document.querySelectorAll("img");
var dropDTA = document.getElementsByClassName("dropDownTextArea");
  for( i = 0 ; i < img_tag.length ; i++ ){
    img_tag[i].onclick = function() {
      var parent_text_node = this.parentElement;
      var text_node = parent_text_node.parentElement.nextElementSibling;
      if(text_node.style.display === "block")
      {
        text_node.style.display = "none";
      }
      else 
      {
        text_node.style.display = "block";
      }
    }
  }
}

// function imageAction() {
//   const images = document.querySelectorAll("img");

//   images.forEach(image => {
//       image.onclick = function() {
//           const text_node = this.parentElement.parentElement.nextElementSibling;
//           text_node.style.display = text_node.style.display === "block" ? "none" : "block";
//       };
//   });
// }




