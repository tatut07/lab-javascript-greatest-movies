// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((movie) => movie.director);
  return directors;
}
let uniqueMovies = moviesArray.filter((a, index) => {
  return moviesArray.indexOf(a) === index;
});
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filteredMovie = moviesArray.filter((movie) => {
    if (
      movie.genre.includes("Drama") &&
      movie.director === "Steven Spielberg"
    ) {
      return movie;
    }
  });
  return filteredMovie.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let scoreAverage = moviesArray.reduce((sum, movie) => {
    if ("score" in movie) {
      return sum + movie.score;
    } else {
      return sum;
    }
  }, 0);

  if (moviesArray.length === 0) {
    return 0;
  } else {
    return +(scoreAverage / moviesArray.length).toFixed(2);
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMoviesAverage = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  let averageDramaScore = scoresAverage(dramaMoviesAverage);
  const final = parseFloat(averageDramaScore);
  return final;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesArrayCopy = [...moviesArray];
  moviesArrayCopy.sort((movie1, movie2) => {
    if (movie1.year > movie2.year) {
      return 1;
    } else if (movie2.year > movie1.year) {
      return -1;
    } else if (movie1.year === movie2.year && movie1.title > movie2.title) {
      return 1;
    } else if (movie1.year === movie2.year && movie2.title > movie1.title) {
      return -1;
    }
  });
  return moviesArrayCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const orderByTitleCopy = [...moviesArray];
  const justTitle = orderByTitleCopy.map((movie) => movie.title);
  justTitle.sort();
  const first20Titles = justTitle.slice(0, 20);
  return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesArrayCopy = [...moviesArray];

  return moviesArrayCopy;
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
}
