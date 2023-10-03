async function getAndDisplayMovies() {
  const movieData = await retrieveMovie();
  displayMovies(movieData);
}
//Timeout to check if the person is still there
function stillThere() {
  alert("Are you still there?");
}
setTimeout(stillThere, 100000);

// fetch data from API
async function retrieveMovie() {
  const response = await fetch("https://api.themoviedb.org/3/discover/movie", {
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTY3Nzc3NzRiNThkZGJiZmIxMjI1NzE5NmQwODEwZiIsInN1YiI6IjY1MTA0YWYxM2E0YTEyMDBlMjk0YmU0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.76x3Plq389jbB3cSwfP6M7ZkpcOCfPXzRUoKQ3gWJA4", // Replace with your actual API key
    },
  });
  // error handling
  if (!response.ok) {
    alert(
      `Movie data cannot be found.\nStatus: ${
        response.status
      }\nText: ${await response.text()}`
    );
  }
  // log data to check response
  const data = await response.json();
  // console.log(data);
  return data;
}

// Function to display movie data
function displayMovies(movieData) {
  // Access the array of movie results
  const movies = movieData.results;

  // Loop through each movie
  for (let movie of movies) {
    // Access properties of each movie (for example, the title)
    console.log(movie.title)
    }
    // loop through movie to display overview
  for (let description of movies)
  console.log(description.overview)
  }
  // Call the function to start fetching and displaying movies
  getAndDisplayMovies();
// function to display movie overview

  // function to create div class=movie-name
  // function to add new movie listing for each new movie in the returned array
// mouseover event to run when mouse pointer hovers over movie title to display movie overview
