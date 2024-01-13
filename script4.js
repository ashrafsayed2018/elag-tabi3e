  // Function to fetch and display articles
  function displayArticles() {
    fetch('db4.json') // Replace with the correct path to your db.json file
      .then((response) => response.json())
      .then((data) => {
        const articlesContainer = document.querySelector('.article-container');
        console.log(data)

        // Loop through the articles and create cards for each one
        data.forEach((article) => {
          const card = document.createElement('div');
          card.classList.add('max-w-full', 'rounded', 'shadow-md', 'my-4');

          // Add the article image (replace 'imageUrl' with your image URL property)
          const image = document.createElement('img');
          image.classList.add('w-full', 'h-[400px]', 'object-cover');
          image.src = article.image; // Replace with the actual image URL

          // Add the article title
          const title = document.createElement('h2');
          title.classList.add('text-2xl', 'font-bold', 'p-8');
          title.textContent = article.title; // Replace with the actual title

          // Add the article content
          const content = document.createElement('p');
          content.classList.add('p-8', 'leading-8');
          content.textContent = article.content; // Replace with the actual content

          // Append image, title, and content to the card
          card.appendChild(image);
          card.appendChild(title);
          card.appendChild(content);

          // Append the card to the articles container
          articlesContainer.appendChild(card);
        });
      })
      .catch((error) => console.error('Error:', error));
  }

 
displayArticles()