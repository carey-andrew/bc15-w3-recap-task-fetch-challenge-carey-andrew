async function getAndDisplayMovies() {
  const movieData = await retrieveMovie();
  displayMovies(movieData);
}

async function retrieveMovie() {
  const response = await fetch("https://api.themoviedb.org/3/discover/movie", {
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTY3Nzc3NzRiNThkZGJiZmIxMjI1NzE5NmQwODEwZiIsInN1YiI6IjY1MTA0YWYxM2E0YTEyMDBlMjk0YmU0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.76x3Plq389jbB3cSwfP6M7ZkpcOCfPXzRUoKQ3gWJA4", // Replace with your actual API key
    },
  });

  if (!response.ok) {
    alert(
      `Movie data cannot be found.\nStatus: ${
        response.status
      }\nText: ${await response.text()}`
    );
  }

  const data = await response.json();
  return data;
  console.log(data);
}

function displayMovies(movieData) {
  const movieArray = movieData.results;
  const titles = movieArray.map((result) => result.title);

  for (let i = 0; i < titles.length; i++) {
    const movieName = document.querySelector(`.movie-name-${i}`);
    if (movieName) {
      movieName.textContent = titles[i];
    }
  }
}
function info(event) {
  console.log(event);
  if (event.type === "mouseover") {
    p.style.opacity = "0";
    return;
  }
  p.style.opacity = "1";
}
document.addEventListener("DOMContentLoaded", getAndDisplayMovies);

function displayInfo(movieData) {
  const movieInfo = movieData.results.overview;
  const information = movieInfo.toString((result) => result.title);
  return information;

  // for (let i = 0; i < overview.length; i++) {
  //   const information = document.querySelector(`.movieInfo-${i}`);
  //   if (information) {
  //     information.textContent = overview[i];
  //   }
  // }
}
document.addEventListener("mouseover", displayInfo);
