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

// for onload actions 
window.onload = function() {
  const col = [];
  const checbox = document.querySelectorAll('inout[type = checkbox]');
  for( i=0 ; i < checkbox.length ; i++ ) {
    checboxChange(i);
  }
}

// for add and delete the columns
const delete_col = document.getElementsByClassName("delete_col");
const edit_col = document.getElementsByClassName("edit_col");

var count_checkbox = 0;

// for adding new elements 
function new_element() {
  var len = table.length;
  var table = document.querySelectorAll('tbody > tr');
  var col = document.getElementsById(" myTable ").rows[0].cells.length;
  const max = 99999;
  const min = 10000;
  var row_count = 0;
  for( i = 1 ; i <= table.length ; i++ ){
    if( i % 2 != 0 ) {
      row_count++ ;
    }
  }
  
}