var x = "0";

function DarkMode() {
    if (x == "0") {
        document.body.classList.replace("light-1","dark-1");
        document.getElementById("Topbar").classList.replace("light-2","dark-2");
        document.getElementById("Info-Context").classList.replace("light-2","dark-2");
        document.getElementById("ShieldContainer").classList.replace("light-3","dark-3");
        document.getElementById("DownloadsTable").classList.replace("light-3","dark-3");
        document.getElementById("SearchInput").classList.replace("search-light","search-dark");
        document.getElementById("DownloadsTable").classList.replace("table-light","table-dark");
        parent.document.getElementById("background").classList.replace("light-1","dark-1");
        parent.document.getElementById("Sidebar").classList.replace("light-2","dark-2");
        x = "1";
    }
    else {
        document.body.classList.replace("dark-1","light-1");
        document.getElementById("Topbar").classList.replace("dark-2","light-2");
        document.getElementById("Info-Context").classList.replace("dark-2","light-2");
        document.getElementById("ShieldContainer").classList.replace("dark-3","light-3");
        document.getElementById("SearchInput").classList.replace("search-dark","search-light");
        document.getElementById("DownloadsTable").classList.replace("table-dark","table-light");
        parent.document.getElementById("background").classList.replace("dark-1","light-1");
        parent.document.getElementById("Sidebar").classList.replace("dark-2","light-2");
        x = "0";
    }
}

const hours = new Date().getHours()
const isDayTime = hours > 6 && hours < 20
if (isDayTime === false) {
    setTimeout(() => { document.getElementById('DarkToggle').checked = true;; }, 100);
    DarkMode();
}