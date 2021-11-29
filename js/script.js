window.addEventListener('load', function () {
    document.getElementById("Content").src="./"+page+".html"+"#"+section;
    if (page=='null') {
      this.window.URL="./home.html"
    }
    setTimeout(() => { document.getElementById("Content").style.display="block"; }, 500);
  })

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page = urlParams.get('page')
const section = urlParams.get('section')

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("Topbar").style.top = "20px";
  } else {
    document.getElementById("Topbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}