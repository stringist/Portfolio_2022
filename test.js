const age = 43;
const email = "jofh@kea.dk";

// let isEven;
// if (age % 2 === 0) {
//   even = true;
// } else {
//   even = false;
// }

// let role = "visitor";
// if (email === "jofh@kea.dk") {
//   if (age > 40) {
//     role = "admin";
//   }
// }


const isEven = age % 2 === 0 ? true : false;
console.log(isEven);


let role = "visitor";
const isAdmin = email === "jofh@kea.dk" && age > 40 ? "admin" : "visitor";

console.log(isAdmin);

// ----------------- Part 2 -----------------
// function setTitle(title) {
// 	  document.body.title = title;
// 	}

// 	function isEven(number) {
// 	  if (number % 2 === 0) {
// 	    return true;
// 	  }
// 	  return false;
// 	}

// 	function getRandBetween1and10() {
// 	  return Math.floor(Math.random() * 10) + 1;
// 	}

const setTitle = title => document.title = title;

let num;
const isEvenNum = num % 2 === 0 ? true : false;

const getRandBetween1and10 = () => Math.floor(Math.random() * 10) + 1;
console.log(getRandBetween1and10());


const movies = [{
        name: "Hard Boiled",
        genre: "Hong Kong Action",
    },
    {
        name: "LOTR",
        genre: "Fantasy",
    },
];


// function showMovie(movie) {
//   console.log(`The movie ${movie.name} is a typical ${movie.genre} movie`);
// }

// movies.forEach(showMovie);

// const showMovie = movie => console.log(`The movie ${movie.name} is a typical ${movie.genre} movie`);
// movies.forEach(showMovie);
movies.forEach(movie => console.log(`The movie ${movie.name} is a typical ${movie.genre} movie`));

// ---------------part 4 ---------------
const searchengines = [
    { target: "https://google.com", name: "Google" },
    { target: "https://bing.com", name: "Bing" },
];
// let links = "";
// searchengines.forEach((link) => {
//   links.push(`<a href="${link.target}">${link.name}</a>`);
// });

let links = "";

// links = searchengines.map(link => `<a href="${link.target}">${link.name}</a>`);
links = searchengines.map(link => [...links, `<a href="${link.target}">${link.name}</a>`]);
console.log(links);