var x = "0";
console.log(x)

function DarkMode() {
    if (x == "0") {
        document.body.classList.replace("light-1","dark-1");
        document.getElementById("Topbar").classList.replace("light-2","dark-2");
        document.getElementById("Info-Context").classList.replace("light-2","dark-2");
        var links = document.getElementsByTagName("a");
        for(var i=0;i<links.length;i++)
        {
            if(links[i].className === "link")
            {
                links[i].style.color = "#E5E9F0";
            }
        }
        var divs = document.getElementsByTagName("div");
        for(var j=0;j<divs.length;j++)
        {
            if(divs[j].className === "Line")
            {
                divs[j].style.backgroundColor = "#4C566A";
            }
        }  
        x = "1";
    }
    else {
        document.body.classList.replace("dark-1","light-1");
        document.getElementById("Topbar").classList.replace("dark-2","light-2");
        document.getElementById("Info-Context").classList.replace("dark-2","light-2");
        var links = document.getElementsByTagName("a");
        for(var i=0;i<links.length;i++)
        {
            if(links[i].className === "link")
            {
                links[i].style.color = "#2E3440";
            }
        }  
        var divs = document.getElementsByTagName("div");
        for(var j=0;j<divs.length;j++)
        {
            if(divs[j].className === "Line")
            {
                divs[j].style.backgroundcColor = "#3B4252";
            }
        }
        x = "0";
    }
}