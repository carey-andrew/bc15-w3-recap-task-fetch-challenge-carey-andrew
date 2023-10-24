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

  
    // Get the parent element where you want to append the movie posters
    const postersContainer = document.querySelector(".posters");
  
    for (let movie of movies) {
      // Create a div container for each movie poster
      const posterContainer = document.createElement("div");
      posterContainer.classList.add("poster-container");
  
      // Append the posterContainer to the postersContainer
      postersContainer.appendChild(posterContainer);
    }
  }
  
  // Wait for DOM to load before fetching and displaying movies
document.addEventListener("DOMContentLoaded", getAndDisplayMovies);

