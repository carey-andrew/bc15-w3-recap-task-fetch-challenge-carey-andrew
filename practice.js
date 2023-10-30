async function getAndDisplayMovies() {
  const movieData = await retrieveMovie();
  await displayMovies(movieData);
}
//Timeout to check if the person is still there
// function stillThere() {
//   alert("Are you still there?");
// }
// setTimeout(stillThere, 100000);

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

async function displayMovies(movieData) {
  const movies = movieData.results;
  const movieList = document.querySelector(".movie-list");

  for (let movie of movies) {
    const listItem = document.createElement("li");
    listItem.classList.add("movie-item");

    const posterContainer = document.createElement("div");
    posterContainer.classList.add("poster-container");

    const displayPoster = document.createElement("img");
    displayPoster.src = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    displayPoster.classList.add("movie-poster");

    const movieDetails = document.createElement("div");
    movieDetails.classList.add("movie-details");

    const movieName = document.createElement("div");
    movieName.classList.add("movie-name");
    movieName.textContent = movie.title;

    const overview = document.createElement("div");
    overview.classList.add("movie-overview");
    overview.textContent = movie.overview;

    posterContainer.appendChild(displayPoster);
    posterContainer.appendChild(movieDetails); // Movie details container
    listItem.appendChild(posterContainer);
    movieList.appendChild(listItem);

    // Add event listener to show/hide movie details on hover
    posterContainer.addEventListener("mouseover", () => {
      movieDetails.style.display = "block";
    });

    posterContainer.addEventListener("mouseout", () => {
      movieDetails.style.display = "none";
    });

    // Add movie name and overview to the movie details container
    movieDetails.appendChild(movieName);
    movieDetails.appendChild(overview);
  }
}

// Wait for DOM to load before fetching and displaying movies
document.addEventListener("DOMContentLoaded", getAndDisplayMovies);
