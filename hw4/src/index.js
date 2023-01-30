const films = [
   {
      id: 1, //не было запятой
      title: "Black Widow",
      year: 2021,
      released: "09 Jul 2021",
      runtime: "134 min",
      genre: ["Action", "Sci-Fi", "Adventure"],
      director: "Cate Shortland",
      writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
      actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
      plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
      country: "United States",
      poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      imdbRating: 6.9,
      imdbVotes: 121932,
      type: "movie",
      boxOffice: "$138,027,361",
      production: "Marvel Studios",
   },
   {
      id: 2,
      title: "Harry Potter and the Deathly Hallows: Part 2",
      year: 2011,
      released: "15 Jul 2011",
      runtime: "130 min",
      genre: ["Adventure", "Drama", "Fantasy"],
      director: "David Yates",
      writer: "Steve Kloves, J.K. Rowling",
      actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
      plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
      country: "United Kingdom, United States",
      poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      imdbRating: 8.1,
      imdbVotes: 790377,
      type: "movie",
      boxOffice: "$381,409,310",
      production: "Heyday Films, Moving Picture Company, Warner Bros.",
   },
   {
      id: 3,
      title: "Star Wars",
      year: 1977,
      released: "25 May 1977",
      runtime: "121 min",
      genre: ["Action", "Adventure", "Fantasy"],
      director: "George Lucas",
      writer: "George Lucas",
      actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
      plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
      country: "United States, United Kingdom",
      poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      imdbRating: 8.6,
      imdbVotes: 1259440,
      type: "movie",
      boxOffice: "$460,998,507",
      production: "Lucasfilm Ltd.",
   },
   {
      id: 4,
      title: "Harry Potter and the Half-Blood Prince",
      year: 2009,
      released: "15 Jul 2009",
      runtime: "153 min",
      genre: ["Action", "Adventure", "Family"],
      director: "David Yates",
      writer: "Steve Kloves, J.K. Rowling",
      actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
      plot: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort\'s dark past.",
      country: "United Kingdom",
      poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
      imdbRating: 7.6,
      imdbVotes: 492245,
      boxOffice: "$302,305,431",
      production: "Heyday Films, Warner Bros.",
   },
   {
      title: "Harry Potter and the Sorcerer's Stone",
      year: 2001,
      released: "16 Nov 2001",
      runtime: "152 min",
      genre: ["Adventure", "Family", "Fantasy"],
      director: "Chris Columbus",
      writer: "J.K. Rowling, Steve Kloves",
      actors: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
      plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
      country: "United Kingdom, United States",
      poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
      imdbRating: 7.6,
      imdbVotes: 684604,
      boxOffice: "$318,087,620",
      production: "1492 Pictures, Heyday Films, Warner Brothers",
   }

];

/* 1. Собрать в массив все жанры фильмов (без повторения) */
const filmGenre = function getGenre(array) {
   const arrFilmGenre = array.map(item => item.genre).join(",").split(",");//константа arrFilmGenre содержит новый массив значение которого содержит обьект. его жанр-преобразую в массив  разделителем-потом преобразую в массив со разделителем
   return arrFilmGenre.filter((item, index) => arrFilmGenre.indexOf(item) === index); // возвр. знач отфильтрованного массива(содержащего два значения) удолетворяющий услов.индекс искомого элемента в массиве при первом совпадении =индексу(genre)
}
console.log(filmGenre(films)) //вывожу в консоль массив films 

/* 2. Собрать в массив всех актеров всех фильмов (без
   повторения) */
const allActors = function getActors(array) {
   const arrActors = array.map(item => item.actors).join(",").split(",");
   return arrActors.filter((item, index) => arrActors.indexOf(item) === index);
}
console.log(allActors(films));

/* метод map в параметре получает функцию которая выполнит для каждого элемента массива 
и то что вернет функция через return будет новым значение элемента,
а вернет значение-новый массив в который войдут элементы, для которых вернет true,
метод filter  отфиьтровывает элементы массива которые удолетворяют условиям элемента
метод(массива) split - преобразует строку в массив с заданным разделителем,
 Метод (массива) join(",") - преобразовывает массив в строку с заданным разделителем */

/* 3. Отсортировать фильмы по рейтингу по убыванию */
const ratingDown = (array) => array.sort((a, b) => b.imdbRating - a.imdbRating)
console.log(ratingDown(films));

/* Имя массива ratingDown =(массив не назначенный) =>беру не сортированный массив. применяю функцию сорт
передаю функцию сортировки (b-a)-по убыванию (a-b) -по возрастанию
вывожу в консоль массив  films у которого произошла сортировка значений*/

/* метод sort проходит по массиву и сравнивает элементы и переупорядочивает эл. */

/* Создать новый массив, где объекты фильмов будут состоять
из следующих полей:
id, title, released, plot */

//  константа принимающая массив=> возвр. новый массив обьекты которого заполняются для хранения различных коллекций с ключами
const newArr = (array) => array.map(object => ({
   id: object.id, //пар ключ-значение. id кажого обьекта
   title: object.title, //title кажого обьекта
   released: object.released,
   plot: object.plot
}));
console.log(newArr(films));

/* 5. Создать функцию, которая бы принимала массив фильмов и
число. А результатом этой функции должен быть
отфильтрованный массив, с фильмами где число равно году
выхода фильма. */
const exitNumber = (arr, number) => arr.filter(item => item.year === number);
console.log(exitNumber(films, 1977));

/* Создаю константу которая принимает два параметра exitNumber(массив и число), обращаюсь к массиву  и вызываю метод filter(на каждой итерации
  получаю обьект item => {возвращаю true||false} условие если (item.year===числу) тогда оставляем в массиве)
  вывожу сообщение в консоль(массив, число-у которого удолеттворяет условию)
 */

/* 6. Создать функцию, которая бы принимала массив фильмов и
строку.А результатом этой функции должен быть новый
отфильтрованный массив, с фильмами, где строка входит в
название фильма. */
const title = (arr, string) => arr.filter(item => item.title.toLowerCase().includes(string.toLowerCase()));
console.log(title(films, 'Half-Blood'));

/* создаю константу которая принимает два параметра (массив и строку)=>для массива применяю метод фильтр filter-(includes ищет искомый элемент в массиве films ->'Half-Blood' ) 
затем вывожу  в консоль*/

/* 7. Создать функцию, которая бы принимала массив фильмов и
строку. А результатом этой функции должен быть
отфильтрованный массив, с фильмами где строка входит в
название фильма или в его сюжет. */
//
const titleFilm = (arr, string) => {
   return arr.filter(item => item.title.toLowerCase().includes(string.toLowerCase()) || item.plot.toLowerCase().includes(string.toLowerCase()));
   /* возвращаю отфильтрованный массив(значение=>ищет у обьекта значение title "все буквы которого с маленькой" [includes]- определяет содержит ли массив искомый элемент {evil},
   или тоже самое в значении plot) */
}
// создаю константу titleFilm принимающая два параметра,
console.log(titleFilm(films, 'evil')); //вывожу сообщение в консоль- массив titleFilm который принял в себя массив films и нашел введенное значение

/* 8. Создать функцию, которая бы принимала 3 параметра:
1)массив фильмов , 2) строка(название поля, например 'title') и
строку/число(значение поля "Black Widow"). А результатом
этой функции должен быть отфильтрованный массив, где
параметры 2 и 3 равны в объекте фильма. Например:
передаем (films, 'title', 'Black Widow') и на выходе получаем
фильм с id=1 если передаем (films, 'year', 2011) , то получаем
фильм с id=2 */
const movieSearch = (arr, fieldName, fieldValue) => {
   //возвращает новый масив элелментов которые удолетваряют условию стрелочной функции переданной в функцию filter обьектов масивов
   return arr.filter((item) => {
      let itemFieldName = Object.keys(item).find(item => item === fieldName); // если есть в объекте поле с имененм fieldName, то возвращает его имя иначе undefined
      let itemValue = item[itemFieldName];// возвращает значение поля с именем fieldName
      return itemValue === fieldValue; // сравнивает введенное значение со значением по имени введенного поля
   });
}
console.log(movieSearch(films, 'title', 'Black Widow'));


