"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: ["Leon", "FightClub", "Titanic", "Rocky", "Dude"],
  };

  //Sort
  function moviesSort() {
    movieDB.movies.sort();
  }

  //Output FilmList
  function filmList() {
    moviesSort();
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
    const itemPoints = item + "...";
    console.log(itemPoints);
    li.forEach((itemLi) => {
      if (itemLi.textContent == item || itemLi.textContent.length > 21) {
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
    if (
      movieDB.movies.indexOf(newFilm) == -1 &&
      newFilm != "" &&
      newFilm.length > 1 &&
      newFilm != "0"
    ) {
      movieDB.movies.push(newFilm);
      moviesSort();
      console.log(movieDB.movies, newFilm);
      const ulWatchedFilms = document.querySelector("#watched-films");
      const a = document.createElement("a");
      a.href = "#";
      a.insertAdjacentHTML("afterbegin", `<li>${newFilmLength(newFilm)}</li>`);
      ulWatchedFilms.append(a);
      addTrash(newFilm);
      if (document.querySelector("#fav-film").value == "on") {
        console.log("favorite");
      }
    } else {
      alert(`${newFilm} exist already!`);
    }
  }

  function newFilmLength(film) {
    if (film.length > 21) {
      let filmList = film.split("");
      console.log(filmList);
      filmList.splice(21, filmList.length - 21, "...");
      return filmList.join("");
    }
    return film;
  }

  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", addFilm);
});
