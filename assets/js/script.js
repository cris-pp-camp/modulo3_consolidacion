const newMessageBlock = document.getElementById('newChat');
const newChat = document.getElementById('new-chat');
const icon = document.getElementById("check");

function changeAlert(){
    newChat.style.fontWeight='normal';
    newChat.style.color='white';
}
function removeIcon() {
    icon.parentNode.removeChild(icon);
}

newMessageBlock.addEventListener('click', changeAlert);
newMessageBlock.addEventListener('click', removeIcon);



const searchButtonPressed = document.getElementById('search-button');

function searchBarPopsUp(){
    const searchButton = document.getElementById('search-input');
    searchButton.style.display='inline-block';
};

searchButtonPressed.addEventListener('click', searchBarPopsUp);



//