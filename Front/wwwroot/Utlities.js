function hideNotification() {
    var notification = document.getElementById("notification");
    notification.className = "";
    notification.classList.add("hidden");
}


function showNotif() {
    var notification = document.getElementById("notification");
    notification.className = "";
    notification.classList.add("success");
}


function showNotifE() {
    var notification = document.getElementById("error");
    notification.className = "";
    notification.classList.add("error");
}

function hideNotifE() {
    var notification = document.getElementById("error");
    notification.className = "";
    notification.classList.add("hidden");
}

var originalBackgroundColor = {}
function setBackground(id) {
    originalBackgroundColor[id] = document.getElementById(id).style.backgroundColor;
    document.getElementById(id).style.backgroundColor = "#c4d8ff";
}

function revertBackground(id){
    document.getElementById(id).style.backgroundColor = originalBackgroundColor[id];
}

function openInNewTab(url){
    let win = window.open(url, '_blank');
    win.blur();
    window.focus();
}
