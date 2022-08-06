console.log("Script loaded!");

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
  console.log("CLICK")
  content = event.target.parentNode.querySelector('#hide');
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden')
  } else {
    content.classList.add('hidden')
  }
}
document.querySelectorAll("#expand").forEach( item => {
  item.addEventListener("click", showContent);
})
