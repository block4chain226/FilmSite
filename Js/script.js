"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: ["Leon", "FightClub", "Titanic", "Rocky", "Dude"],
  };

  //Output FilmList
  function filmList() {
    const ulWatchedFilms = document.querySelector("#watched-films");
    movieDB.movies.forEach((item) => {
      const a = document.createElement("a");
      a.href = "#";
      a.insertAdjacentHTML("afterbegin", `<li>${item}</li>`);
      ulWatchedFilms.append(a);
      addTrash(item);
    });
  }
  filmList();

  //Add TrashButton
  function addTrash(item) {
    const ulWatchedFilms = document.querySelector("#watched-films");
    const trashButton = document.createElement("button");
    trashButton.classList = ".trash";
    var lidelete;
    const li = ulWatchedFilms.querySelectorAll("li");
    li.forEach((itemLi) => {
      if (itemLi.textContent == item) {
        lidelete = itemLi;
        itemLi.parentNode.append(trashButton);
      }
    });
    trashButton.addEventListener("click", (e) => {
      e.preventDefault();
      const i = movieDB.movies.indexOf(item);
      movieDB.movies.splice(i, 1);
      console.log(movieDB.movies);
      trashButton.parentNode.remove();
    });
  }

  //AddFilm
  function addFilm(e) {
    e.preventDefault();
    const newFilm = document.querySelector("#enter-film").value;
    if (movieDB.movies.indexOf(newFilm) == -1) {
      movieDB.movies.push(newFilm);
      console.log(movieDB.movies);
      const ulWatchedFilms = document.querySelector("#watched-films");
      const a = document.createElement("a");
      a.href = "#";
      a.insertAdjacentHTML("afterbegin", `<li>${newFilm}</li>`);
      ulWatchedFilms.append(a);
      addTrash(newFilm);
    } else {
      alert(`${newFilm} exist already!`);
    }
  }

  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", addFilm);
});
