"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: ["Leon", "FightClub", "Titanic", "Rocky", "Dude"],
  };

  //Output FilmList
  function filmList() {
    const ulWatchedFilms = document.querySelector("#watched-films");
    movieDB.movies.forEach((item, index) => {
      const a = document.createElement("a");
      a.id = "a" + index;
      const aindex = a.id;
      a.href = "#";
      a.insertAdjacentHTML("afterbegin", `<li>${item}</li>`);
      ulWatchedFilms.append(a);
      addTrash(aindex, item);
    });
  }
  filmList();

  //Add TrashButton
  function addTrash(aIndex, item) {
    const ulWatchedFilms = document.querySelector("#watched-films");
    const trashButton = document.createElement("button");
    trashButton.classList = ".trash";
    ///?
    //const a = ulWatchedFilms.querySelector("#" + aIndex);
    var lidelete;
    /////////////////////////!!!!
    const li = ulWatchedFilms.querySelectorAll("li");
    li.forEach((itemLi) => {
      if (itemLi.textContent == item) {
        lidelete = itemLi;
        itemLi.parentNode.append(trashButton);
      }
    });

    //a.append(trashButton);
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
      /////?
      const aindex = 1;
      const ulWatchedFilms = document.querySelector("#watched-films");
      const a = document.createElement("a");
      a.href = "#";
      a.insertAdjacentHTML("afterbegin", `<li>${newFilm}</li>`);
      ulWatchedFilms.append(a);
      addTrash(aindex, newFilm);
    } else {
      alert(`${newFilm} exist already!`);
    }
  }

  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", addFilm);
});
