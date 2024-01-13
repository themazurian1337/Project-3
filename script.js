let movies = [];

let sortedAccending = true;

const displayMovies = () => {
  moviesContainer = document.querySelector('#moviesDisplay');
  moviesContainer.innerHTML = '';

  if (!movies.length) {
    let emptyListing = document.createElement('li');
    emptyListing.textContent = 'There are currently no movies to display';
    moviesContainer.appendChild(emptyListing);
  } else {
    movies.forEach((movie) => {
      let newMovieListing = document.createElement('li');
      newMovieListing.textContent = `${movie.title} - Rating: ${movie.rating}`;
      moviesContainer.appendChild(newMovieListing);
    });
  }
};

const addMovie = () => {
  let movieTitle = document.querySelector('#movieTitle').value.trim();
  let movieRating = parseFloat(document.querySelector('#movieRating').value);
  if (isNaN(movieRating) || movieRating < 0 || movieRating > 5) {
    alert('Invalid Rating Provided');
  } else if (!movieTitle.length) {
    alert('Invalid Title Provided');
  } else {
    let movieObject = {
      title: movieTitle,
      rating: movieRating,
    };

    movies.push(movieObject);
    document.querySelector('#movieTitle').value = '';
    document.querySelector('#movieRating').value = '';

    displayMovies();
  }
};

let addMovieButton = document
  .querySelector('#addMovieButton')
  .addEventListener('click', addMovie);

const movieSort = () => {
  switch (sortedAccending) {
    case true:
      for (let i = 0; i < movies.length; i++) {
        for (let j = 0; j < movies.length - i - 1; j++) {
          if (movies[j].rating < movies[j + 1].rating) {
            let temp = movies[j];
            movies[j] = movies[j + 1];
            movies[j + 1] = temp;
          }
        }
      }
      sortedAccending = false;
      break;

    case false:
      for (let i = 0; i < movies.length; i++) {
        for (let j = 0; j < movies.length - i - 1; j++) {
          if (movies[j].rating > movies[j + 1].rating) {
            let temp = movies[j];
            movies[j] = movies[j + 1];
            movies[j + 1] = temp;
          }
        }
      }
      sortedAccending = true;

      break;
  }

  displayMovies();
};

let sortMovieButton = document
  .querySelector('#sortMovieButton')
  .addEventListener('click', movieSort);
displayMovies();
