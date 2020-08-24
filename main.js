import './src/script/component/app-bar.js';
import './src/script/component/movie-list.js';

const main = () => {
    
    const btnNavGenre = document.querySelectorAll(".genre-nav-chose");
    const movieListElement = document.querySelector("movie-list");

    const onButtonNavClicked = (genreId) => {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.dataMovies(genreId);
    };

    const renderResult = (results) => {
        movieListElement.movies = results;
    };

    const fallbackResult = (message) => {
        movieListElement.renderError(message);
    };

    btnNavGenre[0].addEventListener("click", onButtonNavClicked(28));
    for (let i=0; i<btnNavGenre.length; i++) {
        btnNavGenre[i].addEventListener("click", () => {
            let genreId = 28;
            if (i === 1) { genreId = 12 }
            
            btnNavGenre[i].addEventListener("click", onButtonNavClicked(genreId));
        });
    }
};

document.addEventListener("DOMContentLoaded", main);