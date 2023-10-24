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
// Function to display movie data
async function displayMovies(movieData) {
  const movies = movieData.results;

  // Get the parent element where you want to append the movie list
  const movieList = document.querySelector(".movie-name");
  //const posterFrame = document.getElementById("poster-path");

  for (let movie of movies) {
    // Create a container div for each poster
    const posterContainer = document.createElement("div");
    posterContainer.classList.add("poster-container");

    // Create an image element for each poster
    const displayPoster = document.createElement("img");
    displayPoster.src = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

    // Append the poster to the poster container
    posterContainer.appendChild(displayPoster);

    // Create a new list item for each movie
    const listItem = document.createElement("li");
    listItem.textContent = movie.title;

    // Create an element to display the movie overview
    const overview = document.createElement("div");
    overview.className = "movie-description";
    overview.textContent = movie.overview;

    // Add event listeners to show/hide overview on hover
    listItem.addEventListener("mouseout", () => {
      overview.style.display = "none";
    });
    listItem.addEventListener("mouseover", () => {
      overview.style.display = "block";
    });

    // Append the poster container to the list item
    listItem.appendChild(posterContainer);

    // Append the overview to the list item
    listItem.appendChild(overview);

    // Append the list item to the parent element
    movieList.appendChild(listItem);
  }
}

// Wait for DOM to load before fetching and displaying movies
document.addEventListener("DOMContentLoaded", getAndDisplayMovies);

