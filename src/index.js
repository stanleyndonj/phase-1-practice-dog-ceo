console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    // Challenge 1: Fetching and displaying dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('dog-image-container');
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                imageContainer.appendChild(img);
            });
        });

    // Challenge 2: Fetching and displaying dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById('dog-breeds');
            for (const breed in data.message) {
                const li = document.createElement('li');
                li.textContent = breed;
                breedList.appendChild(li);
            }
        });

    // Challenge 3: Changing font color on click
    document.getElementById('dog-breeds').addEventListener('click', event => {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue';
        }
    });

    // Challenge 4: Filtering breeds by dropdown selection
    const dropdown = document.getElementById('breed-dropdown');
    const breedList = document.getElementById('dog-breeds');
    
    dropdown.addEventListener('change', event => {
        const letter = event.target.value;
        const lis = breedList.getElementsByTagName('li');
        for (const li of lis) {
            if (letter === 'all' || li.textContent.startsWith(letter)) {
                li.style.display = 'list-item';
            } else {
                li.style.display = 'none';
            }
        }
    });
});
