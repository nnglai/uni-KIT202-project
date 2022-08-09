console.log("Script loaded!");
console.log(window.location.pathname)

// find the anchor with the href that matches the current url and add a styling class to it 
currentLinks = document.querySelectorAll('a');
currentLinks.forEach(function(link) {
  if ('/' + link.getAttribute("href") == window.location.pathname && link.className == 'link') {
    link.className += ' currentPage';
  }
}); 

// event handler for clicking to expand an archive 
// BUG: seems to periodically have the content return NULL, meaning the query select isn't grabbing it
function showContent (event) {
  if(event.target.classList.contains("expand")){
    content = event.target.parentNode.querySelector('.post-content');
    arrow = event.target.querySelector('i');

    content.classList.toggle("hidden");

    arrow.classList.toggle("fa-angle-down");
    arrow.classList.toggle("fa-angle-up");
  }

  //console.log(event.target.parentNode.querySelector('.post-content'));

  //console.log(event.target);

}
if (window.location.pathname == '/archive.html') {
  console.log(document.querySelectorAll(".expand"));
  document.querySelectorAll(".expand").forEach( item => { //return to classic for loop rather than foreach =>
    console.log(item);
    item.addEventListener("click", showContent);
  })
}
