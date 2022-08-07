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
  content = event.target.parentNode.querySelector('#hide');
  arrow = event.target.querySelector('i');

  content.classList.toggle("hidden");

  arrow.classList.toggle("fa-angle-down");
  arrow.classList.toggle("fa-angle-up");

}
if (window.location.pathname == '/archive.html') {
  document.querySelectorAll("#expand").forEach( item => {
    item.addEventListener("click", showContent);
  })
}
