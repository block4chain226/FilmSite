const movieDB = {
  movies: ["Leon", "FightClub", "Titanic", "Rocky", "Dude"],
};
//remove start films
function remove(movieDB) {
  movieDB.movies.sort();
  document.getElementById("watched-films").remove();
}
remove(movieDB);
//new film list
function filmList() {
  const div = document.createElement("ul");
  div.id = "watched-films";
  const contentWatchedFilms = document.querySelector(".content__film-list");
  contentWatchedFilms.appendChild(div);
  for (let i = 0; i < movieDB.movies.length; i++) {
    div.innerHTML += `<a href=""><li>${movieDB.movies[i]}</li></a>`;
  }
  console.log(document.body);
}
filmList();
//addfilm
function addFilm(e) {
  let i = 0;
  e.preventDefault();
  const favFilm = document.querySelector("#fav-film");

  const watchedFilm = document.getElementById("enter-film").value;
  if (movieDB.movies.length == 0) {
    movieDB.movies.push(watchedFilm);
  } else {
    while (watchedFilm != movieDB.movies[i] || i < movieDB.movies.length) {
      i++;
      iscopy = false;
      if (watchedFilm == movieDB.movies[i]) {
        alert("film exist already");
        break;
      }

      if (i == movieDB.movies.length) {
        movieDB.movies[movieDB.movies.length] = watchedFilm;
        if (favFilm.value == "on") {
          console.log(watchedFilm + "is favorite film!");
        }
        console.log(movieDB.movies);
        const a = document.createElement("a");
        a.href = "#";
        if (watchedFilm.length >= 21) {
          a.innerHTML = `<li>${newFilmLength(watchedFilm)}</li>`;
          const ul = document.getElementById("watched-films");
          ul.append(a);
          addTrash();
          //addTrash(movieDB.movies.length - 1);
          break;
        } else {
          a.innerHTML = `<li>${movieDB.movies[movieDB.movies.length - 1]}</li>`;
          const ul = document.getElementById("watched-films");
          ul.append(a);
          addTrash();
          //addTrash(movieDB.movies.length - 1);
          break;
        }
      }
    }
  }
}
//checklength
function newFilmLength(film) {
  const filmsplit = film.split("");
  filmsplit.splice(21, filmsplit.length - 21, "...");
  filmsplit.join("");
  return filmsplit;
}

function addTrash(newfilm) {
  const ulWatchedFilms = document.querySelector("#watched-films");
  const filmList = ulWatchedFilms.querySelectorAll("a");
  let isbutton = false;
  let filmListNodes;
  filmList.forEach((item, index) => {
    if (item.hasChildNodes) {
      filmListNodes = item.childNodes;
    }

    for (let i = 0; i < filmListNodes.length; i++) {
      if (filmListNodes[i].nodeName != "BUTTON") {
        isbutton = false;
      } else {
        isbutton = true;
      }
    }
    if (isbutton == false && newfilm == undefined) {
      const button = document.createElement("button");
      button.id = index;
      button.classList = "trash";
      item.append(button);
    }
  });
  console.log(filmList);
  console.log(document.body);
  removeFilm();
}
addTrash();

function removeFilm() {
  const ulWatchedFilms = document.querySelector("#watched-films");
  const trashButtons = ulWatchedFilms.querySelectorAll("button");

  //console.log(trashButtons);
  // for (let i = 0; i < trashButtons; i++) {
  //   trashButtons[i].addEventListener("click", (e) => {
  //     e.preventDefault();
  //     trashButtons[i].parentNode.remove();
  //   });
  // }

  trashButtons.forEach((item, index1) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      //const index = fruits.findIndex((fruit) => fruit === "blueberries");
      const index = movieDB.movies.findIndex(
        (film) => film === item.previousElementSibling.textContent
      );
      // let findFilm = (item) =>
      //   movieDB.movies[1] == item.previousElementSibling.textContent;
      movieDB.movies.splice(index, 1);

      console.log(movieDB.movies);

      item.parentNode.remove();
    });
  });
}
//removeFilm();
//buttons
const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", addFilm);
