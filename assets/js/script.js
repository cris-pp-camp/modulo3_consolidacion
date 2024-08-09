const message = document.getElementById('newChat');
const newChat = document.getElementById('new-chat');
const icon = document.getElementById("check");

function changeAlert(){
    newChat.style.fontWeight='normal';
    newChat.style.color='white';
}
function removeIcon() {
    icon.parentNode.removeChild(icon);
}

message.addEventListener('click', changeAlert);
message.addEventListener('click', removeIcon);

const searchButton = document.getElementById('search-button');

function searchBarPopsUp(){
    const searchButton = document.getElementById('search-input');
    searchButton.style.display='inline-block';
};

searchButton.addEventListener('click', searchBarPopsUp);