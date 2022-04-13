// "use strict"

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?", ""),
//               b = prompt("На сколько оцените его", "");

//         if (a != null && b != null && a != '' && b != '' && a.length <50) {
//             personalMovieDB.movies[a] = b;
//             console.log('Done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();


// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres () {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres ();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

for (let key in options) {
    if (typeof(options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Значение ${i} будет ${options[key][i]}`);
            }
        } else {
            console.log(`Значение ${key} будет ${options[key]}`);
        }
}