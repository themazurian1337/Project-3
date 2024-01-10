let movies = [];
let isSorted = false;

const addMovie = () => {
  let movieTitle = document.querySelector('#movieTitle').value.trim();
  let movieRating = document.querySelector('#movieRating').value;
  if (movieRating < 0 || movieRating > 5) {
    alert('Invalid Rating Provided');
  } else if (movieTitle.length <= 0) {
    alert('Invalid Title Provided');
  } else {
    let movieObject = {
      title: movieTitle,
      rating: movieRating,
    };

    movies.push(movieObject);

    console.log(movies);
  }
};

let addMovieButton = document
  .querySelector('#addMovieButton')
  .addEventListener('click', addMovie);
