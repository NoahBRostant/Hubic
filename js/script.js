window.addEventListener('load', function () {
    document.getElementById("Content").src="./"+page+".html";
    setTimeout(() => { document.getElementById("Content").style.display="block"; }, 500);
  })

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const page = urlParams.get('page')