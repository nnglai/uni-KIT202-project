console.log("Script loaded!");

currentLinks = document.querySelectorAll('a');
console.log(currentLinks);
currentLinks.forEach(function(link) {
  console.log('/'+link.getAttribute("href"))
  console.log(window.location.pathname)

  if ('/' + link.getAttribute("href") == window.location.pathname && link.className == 'link') {
    link.className += ' currentPage';
  }
}); 