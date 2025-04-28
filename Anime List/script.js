// Select the list container
const animeList = document.getElementById('anime-list');

// Function to toggle checkmark
function toggleCheck(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('watched');
    }
}

// Add event listener to the list
animeList.addEventListener('click', toggleCheck);

// Function to add a new anime to the list
function addAnime(animeName) {
    const listItem = document.createElement('li');
    listItem.textContent = animeName;
    animeList.appendChild(listItem);
}

// Example usage: Add some anime to the list
addAnime('Naruto');
addAnime('Attack on Titan');
addAnime('One Piece');
// Save the list to local storage
function saveList() {
    const animeArray = Array.from(animeList.children).map(item => ({
        name: item.textContent,
        watched: item.classList.contains('watched')
    }));
    localStorage.setItem('animeList', JSON.stringify(animeArray));
}

// Load the list from local storage
function loadList() {
    const storedList = JSON.parse(localStorage.getItem('animeList')) || [];
    storedList.forEach(anime => {
        const listItem = document.createElement('li');
        listItem.textContent = anime.name;
        if (anime.watched) {
            listItem.classList.add('watched');
        }
        animeList.appendChild(listItem);
    });
}

// Update local storage whenever the list changes
animeList.addEventListener('click', saveList);

// Load the list on page load
loadList();