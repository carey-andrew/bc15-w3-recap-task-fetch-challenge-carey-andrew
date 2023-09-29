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
  console.log(data);
  return data;
}
// function to display movie data
function displayMovies(movieData) {
  //store in array
  const movieArray = movieData.results;
  // access the title of each movie
  const titles = movieArray.map((result) => result.title);
  // loop through the titles in the array and save as variable
  for (let i = 0; i < titles.length; i++) {
    const movieName = document.querySelector(`.movie-name-${i}`);
    if (movieName) {
      movieName.textContent = titles[i];
    }
  }
}
// display movies when page loads
document.addEventListener("DOMContentLoaded", getAndDisplayMovies);
// function to display overview when title hovered over
function displayInfo(movieData) {
  const movieInfo = movieData.results.overview;
  const information = movieInfo.toString((result) => result.title);
  return information;
}
// event listener for mouseover - not complete yet
document.addEventListener("mouseover", displayInfo);
