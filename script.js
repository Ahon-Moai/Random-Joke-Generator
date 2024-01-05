let btn = document.getElementById("btn");
let jokes = document.getElementById("jokes");
let URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  fetch(URL)
    .then((data) => data.json())
    .then((ahon) => {
      jokes.innerText = `${ahon.joke}`;
    });
};
btn.addEventListener("click", getJoke);
